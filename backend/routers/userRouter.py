
from typing import Callable
from fastapi import APIRouter, Form

from services.hashrepo.bcrypt_repo import bcryptHash
from models.models import User
from utils import http as httpUtils

def create_user_router(get_app_funcs: Callable[[], dict[str, dict[str, callable]]]) -> APIRouter:
    userRouter = APIRouter()

    @userRouter.get("/")
    async def get_users():
        return {"message": "Get authenticated user"}

    @userRouter.post("/register")
    async def register_user(
        username: str = Form(),
        password: str = Form()
    ):
        try:
            hashed_password = bcryptHash(password)
        except Exception as e:
            return httpUtils.jsonResponse({
                "error": str(e)
            }, 500)
        
        newUser = User(
            id=0,
            username=username,
            password=hashed_password,
            profileImageUrl="",
            createdAt=""
        )

        # TODO: save user to database

        auth_token = get_app_funcs()["authrepo"]()["create_token"]({
            "username": newUser.username,
        })

        res = httpUtils.jsonResponse({
            "message": "User registered"
        }, 201)
        res.headers["Authorization"] = f"Bearer {auth_token}"
        
        return res

    @userRouter.post("/login")
    async def login_user():
        return {"message": "Login user"}

    return userRouter