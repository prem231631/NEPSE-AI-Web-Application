from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from auth.utils import verify_password, create_token, verify_token
from sqlalchemy.orm import Session
from database import get_db
from models import User

router = APIRouter()
security = HTTPBearer()

class UserLogin(BaseModel):
    email: EmailStr
    password: str

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