from psycopg import Connection

from models.models import User

def create_user(conn: Connection, user: User) -> User:
    with conn.cursor() as cur:
        cur.execute(
            "INSERT INTO users (username, password, image_url) VALUES (%s, %s, %s) RETURNING id",
            (user.username, user.password, user.profileImageUrl)
        )
        user.id = cur.fetchone()[0]
        conn.commit()
    return user

def get_user_by_username(conn: Connection, username: str) -> User | None:
    with conn.cursor() as cur:
        cur.execute(
            "SELECT * FROM users WHERE username = %s",
            (username,)
        )
        user = cur.fetchone()
    return User(
        id=user[0],
        username=user[1],
        profileImageUrl=user[2],
        password=user[3],
        createdAt=str(user[4])
    ) if user else None

def get_user_by_id(conn: Connection, user_id: int) -> User | None:
    with conn.cursor() as cur:
        cur.execute(
            "SELECT * FROM users WHERE id = %s",
            (user_id,)
        )
        user = cur.fetchone()
    return User(
        id=user[0],
        username=user[1],
        profileImageUrl=user[2],
        password=user[3],
        createdAt=str(user[4])
    ) if user else None

def update_user_image_url(conn: Connection, user_id: int, image_url: str) -> User | None:
    with conn.cursor() as cur:
        cur.execute(
            "UPDATE users SET image_url = %s WHERE id = %s RETURNING *",
            (image_url, user_id)
        )
        user = cur.fetchone()
        conn.commit()
    return User(
        id=user[0],
        username=user[1],
        profileImageUrl=user[2],
        password=user[3],
        createdAt=str(user[4])
    ) if user else None