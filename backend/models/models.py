
from pydantic import BaseModel

# TODO: handle data types

class User(BaseModel):
    id: int
    username: str
    password: str
    profileImageUrl: str;
    createdAt: str;

class Artwork(BaseModel):
    id: int
    title: str
    authorId: int;
    authorIconUrl: str;
    promptId: int;
    imageUrl: str;
    createdAt: str;

class Prompt(BaseModel):
    id: int
    text: str
    creatorId: int;
    createdAt: str;

class ArtComment(BaseModel):
    id: int;
    creatorId: int;
    artworkId: int;
    text: str;
    createdAt: str;