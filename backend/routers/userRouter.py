
from fastapi import APIRouter

from backend.config import get_app_config

UserRouter = APIRouter()

appConfig = get_app_config()

@UserRouter.get("/")
async def get_users():
    return {"message": "Get authenticated user"}

@UserRouter.post("/register")
async def register_user(
    username: str,
    password: str
):
    print(appConfig.hashrepo.hash(password))
    return {"message": "Register user"}

@UserRouter.post("/login")
async def login_user():
    return {"message": "Login user"}