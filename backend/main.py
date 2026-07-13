from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from signup import router as signup_router
from login import router as login_router
from routes.news import router as news_router
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def home():
    return {"message": "Backend Running"}

app.include_router(news_router)
app.include_router(signup_router)
app.include_router(login_router)

