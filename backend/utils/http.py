import json

from fastapi import Response

def jsonResponse(data: dict, status: int = 200) -> Response:
    return Response(
        content=json.dumps(data),
        status_code=status,
        headers={
            "Content-Type": "application/json"
        }
    )

class ErrorResponses:
    INVALID_AUTH_TOKEN = jsonResponse({
        "error": "Invalid authorization header"
    }, 401)
    USER_NOT_FOUND = jsonResponse({
        "error": "User not found"
    }, 404)
    INCORRECT_PASSWORD = jsonResponse({
        "error": "Incorrect password"
    }, 401)
    FORBIDDEN = jsonResponse({
        "error": "Unauthorized"
    }, 403)