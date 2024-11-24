
from fastapi import APIRouter

from routers.userRouter import create_user_router
from routers.topicRouter import create_topic_router

def create_router(get_app_funcs: dict[str, dict[str, callable]]) -> APIRouter:
    router = APIRouter()

    router.include_router(create_user_router(get_app_funcs))
    router.include_router(create_topic_router(get_app_funcs))

    return router