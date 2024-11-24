
from typing import Callable

from fastapi import APIRouter, Request

from models.models import Topic
from utils import http as httpUtils
from dbrepo import postgresdb as db


def create_topic_router(get_app_funcs: Callable[[], dict[str, dict[str, callable]]]) -> APIRouter:
    topicsRouter = APIRouter()

    @topicsRouter.get("/topics")
    async def get_topics():
        return []
    
    @topicsRouter.post("/topics")
    async def create_topic(
        request: Request
    ):
        auth_token = httpUtils.get_auth_token(request)
        if not auth_token:
            return httpUtils.raise_invalid_auth_token()
        
        try:
            payload = get_app_funcs()["authrepo"]()["parse_token"](auth_token)
        except Exception as e:
            return httpUtils.raise_error(str(e), 401)
        
        body = await request.form()
        text = body.get("text")
        if not text:
            return httpUtils.raise_error("Text is required", 400)
        
        return Topic(
            id=0,
            text=text,
            creatorId=int(payload["user_id"]),
            createdAt=""
        )
    
    @topicsRouter.get("/topics/{topic_id}")
    async def get_topic(topic_id: int):
        return Topic(
            id=topic_id,
            title="Test",
            description="Test",
            creatorId=0,
            createdAt=""
        )
    
    @topicsRouter.get("/users/{user_id}/topics")
    async def get_user_topics(user_id: int):
        return []

    return topicsRouter