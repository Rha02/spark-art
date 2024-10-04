
from fastapi import APIRouter

from routers.userRouter import UserRouter

AppRouter = APIRouter()

AppRouter.include_router(UserRouter, prefix="/user", tags=["user"])
