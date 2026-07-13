from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel, EmailStr, Field, field_validator
from sqlalchemy.orm import Session
from auth.utils import hash_password
from database import get_db
from models import User
import re

router = APIRouter()

class User_SignUp(BaseModel): 
    name: str
    age: int
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=32)

    @field_validator("password")
    @classmethod
    def check_password_complexity(cls, value: str) -> str:
        errors = []

        if not re.search(r"[0-9]", value):
            errors.append("at least one number")
        if not re.search(r"[A-Z]", value):
            errors.append("at least one uppercase letter")
        if not re.search(r"[a-z]", value):
            errors.append("at least one lowercase letter")
        if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", value):
            errors.append("at least one symbol (!@#$...)")

        if errors:
            raise ValueError(f"Password must contain: {', '.join(errors)}")

        return value

temp_Db = {}

@router.post("/signup")
def Create_User(Userdata: User_SignUp, db: Session = Depends(get_db)):

    if Userdata.age < 18:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="You must be 18 or older to register."
        )

    existing_user = db.query(User).filter(User.email == Userdata.email).first()

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Email '{Userdata.email}' is already registered."
        )

    hashed_pass = hash_password(Userdata.password)

    new_user = User(
        name=Userdata.name,
        age=Userdata.age,
        email=Userdata.email,
        password=hashed_pass
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully!",
        "user_email": new_user.email
    }