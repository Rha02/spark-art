
from fastapi import APIRouter, Form

from config import get_app_config
from models.models import User
from utils import http as httpUtils

UserRouter = APIRouter()

appConfig = get_app_config()

@UserRouter.get("/")
async def get_users():
    return {"message": "Get authenticated user"}

@UserRouter.post("/register")
async def register_user(
    username: str = Form(),
    password: str = Form()
):
    try:
        hashed_password = appConfig.hashrepo.hash(password)
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
    print(newUser)

    auth_token = appConfig.authrepo.create_token({
        "username": newUser.username,
    })

    res = httpUtils.jsonResponse({
        "message": "User registered"
    }, 201)
    res.headers["Authorization"] = f"Bearer {auth_token}"
    
    return res

@UserRouter.post("/login")
async def login_user():
    return {"message": "Login user"}