from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from database import get_db
from models import User, OTPStore
from auth.utils import hash_password
from datetime import datetime, timedelta
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
import random
import string

router = APIRouter()

# Gmail SMTP Configuration
conf = ConnectionConfig(
    MAIL_USERNAME="success.231646@ncit.edu.np",
    MAIL_PASSWORD="ksav xcug elwt isei",  # Your Gmail App Password
    MAIL_FROM="success.231646@ncit.edu.np",
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True
)

def generate_otp() -> str:
    return ''.join(random.choices(string.digits, k=6))


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


@router.post("/forgot-password")
async def forgot_password(
    request: ForgotPasswordRequest,
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(User.email == request.email).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No account found with this email"
        )

    otp = generate_otp()
    expires_at = datetime.utcnow() + timedelta(minutes=10)

    db.query(OTPStore).filter(OTPStore.email == request.email).delete()

    new_otp = OTPStore(
        email=request.email,
        otp=otp,
        expires_at=expires_at
    )
    db.add(new_otp)
    db.commit()

    message = MessageSchema(
        subject="Password Reset OTP",
        recipients=[request.email],
        body=f"""
Your OTP is: {otp}

It is valid for 10 minutes.

If you did not request this, please ignore this email.
""",
        subtype=MessageType.plain,
    )

    fm = FastMail(conf)
    await fm.send_message(message)

    return {
        "message": f"OTP sent to {request.email}",
        "note": "Valid for 10 minutes"
    }


# ── Verify OTP + Reset Password ──
class ResetPasswordRequest(BaseModel):
    email: EmailStr
    otp: str
    new_password: str

@router.post("/reset-password")
def reset_password(
    request: ResetPasswordRequest, db: Session = Depends(get_db)):
    # find OTP in DB
    stored_otp = db.query(OTPStore).filter(
        OTPStore.email == request.email).first()

    if not stored_otp:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="No OTP requested for this email"
            )

    # check if expired
    if datetime.utcnow() > stored_otp.expires_at:
        db.delete(stored_otp)
        db.commit()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="OTP has expired. Please request a new one."
            )
    # check if OTP matches
    if request.otp != stored_otp.otp:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid OTP"
            )

    # find user and update password
    user = db.query(User).filter(User.email == request.email).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    user.password = hash_password(request.new_password)
    db.delete(stored_otp)   # delete used OTP
    db.commit()

    return {"message": "Password reset successfully! Please login with your new password."}

