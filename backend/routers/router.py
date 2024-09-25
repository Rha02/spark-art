
from fastapi import APIRouter

from backend.routers.userRouter import UserRouter


AppRouter = APIRouter()

AppRouter.include_router(UserRouter, prefix="/user", tags=["user"])
