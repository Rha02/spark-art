
from fastapi import FastAPI

from backend.routers.router import AppRouter

app = FastAPI()

app.include_router(AppRouter, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Hello World"}