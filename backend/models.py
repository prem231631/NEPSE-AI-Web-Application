from sqlalchemy import Column, Integer, String
from database import Base
from datetime import datetime


class User(Base): 
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    age = Column(Integer, nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)

class OTPStore(Base):
    __tablename__ = "otp_store"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), nullable=False)
    otp = Column(String(6), nullable=False)
    expires_at = Column(DateTime, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)