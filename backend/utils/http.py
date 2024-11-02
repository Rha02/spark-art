
from fastapi import HTTPException
from fastapi.responses import JSONResponse

def jsonResponse(data: dict, status: int = 200) -> JSONResponse:
    return JSONResponse(
        content=data,
        status_code=status
    )

def raise_error(message: str, status: int = 400):
    return HTTPException(status_code=status, detail=message)

def raise_invalid_auth_token():
    return raise_error("Invalid authorization token", 401)

def raise_user_not_found():
    return raise_error("User not found", 404)

def raise_incorrect_password():
    return raise_error("Incorrect password", 400)

def raise_forbidden():
    return raise_error("Unauthorized", 403)