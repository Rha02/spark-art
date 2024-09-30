
from fastapi import FastAPI

from .config import init_app_config
from .services.hashrepo.test_repo import TestHashRepository

# Set up the app-wide configuration
init_app_config(hashrepo=TestHashRepository())

from .routers.router import AppRouter

app = FastAPI()
app.include_router(AppRouter, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Hello World"}