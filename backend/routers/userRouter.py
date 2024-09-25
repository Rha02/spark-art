
from fastapi import APIRouter

UserRouter = APIRouter()

@UserRouter.get("/")
async def get_users():
    return {"message": "Get authenticated user"}

@UserRouter.post("/register")
async def register_user():
    return {"message": "Register user"}

@UserRouter.post("/login")
async def login_user():
    return {"message": "Login user"}