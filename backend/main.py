
import os
from dotenv import load_dotenv
from fastapi import FastAPI

from services.authrepo.jwt_repo import token_generator, token_parser
from config import init_app_config
from services.hashrepo.bcrypt_repo import BcryptHashRepository

load_dotenv()

# Set up the app-wide configuration
init_app_config(
    hashrepo=BcryptHashRepository(),
)

from routers.router import create_router

secret_token = os.getenv("SECRET_TOKEN")
algorithm = os.getenv("JWT_ALGORITHM")

getAppFuncs = lambda secret_token, token_algorithm: {
    "authrepo": lambda: {
        "create_token": token_generator(secret_token, token_algorithm),
        "parse_token": token_parser(secret_token, token_algorithm)
    },
}

app = FastAPI()
app.include_router(
    create_router(getAppFuncs(
        secret_token, 
        algorithm
    )), 
    prefix="/api"
)

@app.get("/")
async def root():
    return {"message": "Hello World"}