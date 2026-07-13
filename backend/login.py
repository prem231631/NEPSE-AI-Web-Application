from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from auth.utils import verify_password, create_token, verify_token
from signup import temp_Db

router = APIRouter()
security = HTTPBearer()

class UserLogin(BaseModel):
    email: EmailStr
    password: str

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        email = verify_token(token)
    except ValueError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    user = temp_Db.get(email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/login")
def login_user(login: UserLogin):
    if login.email not in temp_Db:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    stored_user = temp_Db[login.email]
    if not verify_password(login.password, stored_user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    return {
        "access_token": create_token({"sub": login.email}),
        "token_type": "bearer"
    }

@router.get("/me")
def get_me(current_user = Depends(get_current_user)):
    return {
        "name": current_user["name"],
        "email": current_user["email"],
        "age": current_user["age"]
    }