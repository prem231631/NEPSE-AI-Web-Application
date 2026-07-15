from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from signup import router as signup_router
from login import router as login_router
from stocks import router as stocks_router
from watchlist import router as watchlist_router
from database import Base, engine
from news import router as news_router
import models

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",          
        "http://192.168.1.105:5173"       
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)
app.include_router(signup_router)
app.include_router(login_router)
app.include_router(stocks_router)
app.include_router(watchlist_router)
app.include_router(news_router)