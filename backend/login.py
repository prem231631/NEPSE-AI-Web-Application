from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from auth.utils import (verify_password, create_token, verify_token, hash_password)
from sqlalchemy.orm import Session
from database import get_db
from models import User
import re

router = APIRouter()
security = HTTPBearer()

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UpdateProfile(BaseModel):
    name: str
    age: int

class ChangePassword(BaseModel):
    current_password: str
    new_password: str
    confirm_password: str

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    token = credentials.credentials

    try:
        email = verify_token(token)
    except ValueError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    user = db.query(User).filter(User.email == email).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    return user

@router.post("/login")
def login_user(login: UserLogin, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == login.email).first()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    if not verify_password(login.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    return {
        "access_token": create_token({"sub": user.email}),
        "token_type": "bearer"
    }


@router.get("/me")
def get_me(current_user = Depends(get_current_user)):
    return {
        "name": current_user.name,
        "email": current_user.email,
        "age": current_user.age
}

@router.put("/profile")
def update_profile(
    profile: UpdateProfile,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    current_user.name = profile.name
    current_user.age = profile.age

    db.commit()
    db.refresh(current_user)

    return {
        "name": current_user.name,
        "email": current_user.email,
        "age": current_user.age
    }

@router.put("/change-password")
def change_password(
    data: ChangePassword,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    # Check current password
    if not verify_password(data.current_password, current_user.password):
        raise HTTPException(
            status_code=400,
            detail="Current password is incorrect."
        )

    # Check confirmation
    if data.new_password != data.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match."
        )

    # Password validation
    if len(data.new_password) < 8:
        raise HTTPException(
            status_code=400,
            detail="Password must be at least 8 characters."
        )

    if not re.search(r"[0-9]", data.new_password):
        raise HTTPException(
            status_code=400,
            detail="Password must contain at least one number."
        )

    if not re.search(r"[A-Z]", data.new_password):
        raise HTTPException(
            status_code=400,
            detail="Password must contain at least one uppercase letter."
        )

    if not re.search(r"[a-z]", data.new_password):
        raise HTTPException(
            status_code=400,
            detail="Password must contain at least one lowercase letter."
        )

    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", data.new_password):
        raise HTTPException(
            status_code=400,
            detail="Password must contain at least one symbol."
        )

    current_user.password = hash_password(data.new_password)

    db.commit()

    return {
        "message": "Password changed successfully."
    }