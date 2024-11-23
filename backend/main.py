
import os
from dotenv import load_dotenv
from fastapi import FastAPI

from services.authrepo.jwt_repo import token_generator, token_parser
from routers.router import create_router
from driver.postgres import create_postgres_connection

# Get environment variables
load_dotenv()
secret_token = os.getenv("SECRET_TOKEN")
algorithm = os.getenv("JWT_ALGORITHM")
postgres_conn_str = os.getenv("POSTGRES_CONNECTION_STRING")

# Set up database connnection
conn = create_postgres_connection(postgres_conn_str)

# Set up app-wide config functions
getAppFuncs = lambda secret_token, token_algorithm: lambda: {
    "authrepo": lambda: {
        "create_token": token_generator(secret_token, token_algorithm),
        "parse_token": token_parser(secret_token, token_algorithm)
    },
    "dbconn": lambda: conn
}

app = FastAPI()
app.include_router(
    create_router(getAppFuncs(
        secret_token, 
        algorithm
    )), 
    prefix="/api"
)

@app.get("/")
async def root():
    return {"message": "Hello World"}