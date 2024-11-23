
from typing import Callable
from fastapi import APIRouter, Form, HTTPException

from services.hashrepo.bcrypt_repo import bcryptHash
from models.models import User
from utils import http as httpUtils

from dbrepo import postgresdb as db

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
        # TODO: Add validation for username and password
        if password == "":
            return httpUtils.raise_error("Password is required", 400)
        
        try:
            hashed_password = bcryptHash(password)
        except Exception as e:
            print(e)
            return httpUtils.raise_error("Error hashing password", 500)
        
        newUser = User(
            id=0,
            username=username,
            password=hashed_password,
            profileImageUrl="",
            createdAt=""
        )

        # TODO: Set default profile image url
        # TODO: Handle errors
        newUser = db.create_user(get_app_funcs()["dbconn"](), newUser)

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