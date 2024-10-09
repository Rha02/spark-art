
import os
from dotenv import load_dotenv
from fastapi import FastAPI

from services.authrepo.jwt_repo import JWTRepository
from config import init_app_config
from services.hashrepo.bcrypt_repo import BcryptHashRepository

load_dotenv()

secret_token = os.getenv("SECRET_TOKEN")
algorithm = os.getenv("JWT_ALGORITHM")

# Set up the app-wide configuration
init_app_config(
    hashrepo=BcryptHashRepository(),
    authrepo=JWTRepository(secret=secret_token, algorithm=algorithm)
)

from routers.router import AppRouter

app = FastAPI()
app.include_router(AppRouter, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Hello World"}