
from typing import Annotated, Callable

from fastapi import APIRouter, File, Request, UploadFile

from services.imagerepo.azure_repo import upload_image_to_azure_storage
from models.models import Artwork
from utils import http as httpUtils
from dbrepo import postgresdb as db


def create_artwork_router(get_app_funcs: Callable[[], dict[str, dict[str, callable]]]) -> APIRouter:
    artworksRouter = APIRouter()

    @artworksRouter.get("/artworks")
    async def get_artworks():
        return db.get_artworks(get_app_funcs()["dbconn"]())

    @artworksRouter.post("/topics/{topic_id}/artworks")
    async def create_artwork(
        topic_id: int,
        request: Request,
        image: Annotated[UploadFile, File()]
    ):
        auth_token = httpUtils.get_auth_token(request)
        if not auth_token:
            return httpUtils.raise_invalid_auth_token()
        
        try:
            payload = get_app_funcs()["authrepo"]()["parse_token"](auth_token)
        except Exception as e:
            return httpUtils.raise_error(str(e), 401)
        
        dbconn = get_app_funcs()["dbconn"]()
        
        # Get user by id
        user = db.get_user_by_id(dbconn, payload["user_id"])
        
        body = await request.form()
        title = body.get("title")
        if not title:
            return httpUtils.raise_error("Title is required", 400)
        
        # Validate image is jpg, jpeg, or png
        if not image.content_type in ["image/jpeg", "image/jpg", "image/png"]:
            return httpUtils.raise_error("Invalid image type. Please upload a jpg, jpeg, or png file", 400)
        
        image_url = upload_image_to_azure_storage(
            client=get_app_funcs()["blob_service_client"](),
            file=image
        )
        
        artwork = db.create_artwork(
            dbconn,
            Artwork(
                id=0,
                title=title,
                authorId=user.id,
                authorIconUrl=user.profileImageUrl,
                topicId=topic_id,
                imageUrl=image_url,
                createdAt="",
            )
        )

        return artwork
    
    @artworksRouter.get("/users/{user_id}/artworks")
    async def get_user_artworks(user_id: int):
        return db.get_artworks_by_user_id(get_app_funcs()["dbconn"](), user_id)
    
    @artworksRouter.get("/users/{user_id}/liked-artworks")
    async def get_user_liked_artworks(user_id: int):
        return db.get_user_liked_artworks(get_app_funcs()["dbconn"](), user_id)

    @artworksRouter.get("/topics/{topic_id}/artworks")
    async def get_topic_artworks(topic_id: int):
        return db.get_artworks_by_topic_id(get_app_funcs()["dbconn"](), topic_id)

    @artworksRouter.get("/artworks/{artwork_id}")
    async def get_artwork(artwork_id: int):
        return db.get_artwork_by_id(get_app_funcs()["dbconn"](), artwork_id)

    @artworksRouter.post("/artworks/{artwork_id}/like")
    async def like_artwork(artwork_id: int, request: Request):
        auth_token = httpUtils.get_auth_token(request)
        if not auth_token:
            return httpUtils.raise_invalid_auth_token()
        
        try:
            payload = get_app_funcs()["authrepo"]()["parse_token"](auth_token)
        except Exception as e:
            return httpUtils.raise_error(str(e), 401)
        
        db.like_artwork(get_app_funcs()["dbconn"](), payload["user_id"], artwork_id, True)

        return {"message": "Artwork liked"}

    @artworksRouter.post("/artworks/{artwork_id}/dislike")
    async def dislike_artwork(artwork_id: int, request: Request):
        auth_token = httpUtils.get_auth_token(request)
        if not auth_token:
            return httpUtils.raise_invalid_auth_token()
        
        try:
            payload = get_app_funcs()["authrepo"]()["parse_token"](auth_token)
        except Exception as e:
            return httpUtils.raise_error(str(e), 401)
        
        db.like_artwork(get_app_funcs()["dbconn"](), payload["user_id"], artwork_id, False)

        return {"message": "Artwork disliked"}
    
    @artworksRouter.delete("/artworks/{artwork_id}/like")
    async def unlike_artwork(artwork_id: int, request: Request):
        auth_token = httpUtils.get_auth_token(request)
        if not auth_token:
            return httpUtils.raise_invalid_auth_token()
        
        try:
            payload = get_app_funcs()["authrepo"]()["parse_token"](auth_token)
        except Exception as e:
            return httpUtils.raise_error(str(e), 401)
        
        db.unlike_artwork(get_app_funcs()["dbconn"](), payload["user_id"], artwork_id)

        return {"message": "Artwork unliked"}

    return artworksRouter