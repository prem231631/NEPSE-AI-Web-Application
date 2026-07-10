from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.news import router as news_router

app = FastAPI(title="NEPSE AI Backend")

# Allow React frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register News API
app.include_router(news_router)


@app.get("/")
def home():
    return {
        "message": "NEPSE AI Backend Running Successfully"
    }