from psycopg import Connection

from models.models import Artwork, Topic, User

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

def get_topics(conn: Connection) -> list[Topic]:
    with conn.cursor() as cur:
        cur.execute("SELECT * FROM topics")
        topics = cur.fetchall()
    return [
        Topic(
            id=topic[0],
            text=topic[1],
            createdAt=str(topic[2]),
            creatorId=topic[3],
        ) for topic in topics
    ]

def create_topic(conn: Connection, topic: Topic) -> Topic:
    with conn.cursor() as cur:
        cur.execute(
            "INSERT INTO topics (text, user_id) VALUES (%s, %s) RETURNING id, created_at",
            (topic.text, topic.creatorId)
        )
        topic_id, topic_createdAt = cur.fetchone()
        topic.id = topic_id
        topic.createdAt = str(topic_createdAt)
        conn.commit()
    return topic

def get_topic_by_id(conn: Connection, topic_id: int) -> Topic | None:
    with conn.cursor() as cur:
        cur.execute(
            "SELECT * FROM topics WHERE id = %s",
            (topic_id,)
        )
        topic = cur.fetchone()
    return Topic(
        id=topic[0],
        text=topic[1],
        createdAt=str(topic[2]),
        creatorId=topic[3],
    ) if topic else None

def get_topics_by_user_id(conn: Connection, user_id: int) -> list[Topic]:
    with conn.cursor() as cur:
        cur.execute(
            "SELECT * FROM topics WHERE user_id = %s",
            (user_id,)
        )
        topics = cur.fetchall()
    return [
        Topic(
            id=topic[0],
            text=topic[1],
            createdAt=str(topic[2]),
            creatorId=topic[3],
        ) for topic in topics
    ]

def get_artworks(conn: Connection) -> list[Artwork]:
    with conn.cursor() as cur:
        cur.execute("""
            SELECT a.id, a.title, a.image_url, a.created_at, a.user_id, a.topic_id, u.image_url 
            FROM artworks a LEFT JOIN users u ON a.user_id = u.id
            ORDER BY a.created_at DESC
        """)
        artworks = cur.fetchall()
    return [
        Artwork(
            id=artwork[0],
            title=artwork[1],
            imageUrl=artwork[2],
            createdAt=str(artwork[3]),
            authorId=artwork[4],
            topicId=artwork[5],
            authorIconUrl=artwork[6]
        ) for artwork in artworks
    ]

def create_artwork(conn: Connection, artwork: Artwork) -> Artwork:
    with conn.cursor() as cur:
        cur.execute(
            "INSERT INTO artworks (title, image_url, user_id, topic_id) VALUES (%s, %s, %s, %s) RETURNING id, created_at",
            (artwork.title, artwork.imageUrl, artwork.authorId, artwork.topicId)
        )
        artwork_id, artwork_createdAt = cur.fetchone()
        artwork.id = artwork_id
        artwork.createdAt = str(artwork_createdAt)
        conn.commit()
    return artwork

def get_artwork_by_id(conn: Connection, artwork_id: int) -> Artwork | None:
    with conn.cursor() as cur:
        cur.execute("""
                SELECT a.id, a.title, a.image_url, a.created_at, a.user_id, a.topic_id, u.image_url
                FROM artworks a LEFT JOIN users u ON a.user_id = u.id
                WHERE a.id = %s
            """,
            (artwork_id,)
        )
        artwork = cur.fetchone()
    return Artwork(
        id=artwork[0],
        title=artwork[1],
        imageUrl=artwork[2],
        createdAt=str(artwork[3]),
        authorId=artwork[4],
        topicId=artwork[5],
        authorIconUrl=artwork[6]
    ) if artwork else None

def get_artworks_by_user_id(conn: Connection, user_id: int) -> list[Artwork]:
    with conn.cursor() as cur:
        cur.execute(
            """
                SELECT a.id, a.title, a.image_url, a.created_at, a.user_id, a.topic_id, u.image_url
                FROM artworks a LEFT JOIN users u ON a.user_id = u.id
                WHERE a.user_id = %s
                ORDER BY a.created_at DESC
            """,
            (user_id,)
        )
        artworks = cur.fetchall()
    return [
        Artwork(
            id=artwork[0],
            title=artwork[1],
            imageUrl=artwork[2],
            createdAt=str(artwork[3]),
            authorId=artwork[4],
            topicId=artwork[5],
            authorIconUrl=artwork[6]
        ) for artwork in artworks
    ]

def get_artworks_by_topic_id(conn: Connection, topic_id: int) -> list[Artwork]:
    with conn.cursor() as cur:
        cur.execute(
            """
                SELECT a.id, a.title, a.image_url, a.created_at, a.user_id, a.topic_id, u.image_url
                FROM artworks a LEFT JOIN users u ON a.user_id = u.id
                WHERE a.topic_id = %s
                ORDER BY a.created_at DESC
            """,
            (topic_id,)
        )
        artworks = cur.fetchall()
    return [
        Artwork(
            id=artwork[0],
            title=artwork[1],
            imageUrl=artwork[2],
            createdAt=str(artwork[3]),
            authorId=artwork[4],
            topicId=artwork[5],
            authorIconUrl=artwork[6]
        ) for artwork in artworks
    ]

def like_artwork(conn: Connection, user_id: int, artwork_id: int, liked: bool) -> None:
    with conn.cursor() as cur:
        # Fetch the like record if it exists
        cur.execute(
            "SELECT * FROM userlikes WHERE user_id = %s AND artwork_id = %s",
            (user_id, artwork_id)
        )
        like = cur.fetchone()
        if like:
            # Update the like record
            cur.execute(
                "UPDATE userlikes SET is_liked = %s WHERE user_id = %s AND artwork_id = %s",
                (liked, user_id, artwork_id)
            )
        else:
            # Create a new like record
            cur.execute(
                "INSERT INTO userlikes (user_id, artwork_id, is_liked) VALUES (%s, %s, %s)",
                (user_id, artwork_id, liked)
            )
    return None

def unlike_artwork(conn: Connection, user_id: int, artwork_id: int) -> None:
    with conn.cursor() as cur:
        cur.execute(
            "DELETE FROM userlikes WHERE user_id = %s AND artwork_id = %s",
            (user_id, artwork_id)
        )
        conn.commit()
    return None

def get_user_liked_artworks(conn: Connection, user_id: int):
    with conn.cursor() as cur:
        cur.execute(
            """
                SELECT a.id, a.title, a.image_url, a.created_at, a.user_id, a.topic_id, u.image_url
                FROM artworks a LEFT JOIN users u ON a.user_id = u.id
                WHERE a.id IN (SELECT artwork_id FROM userlikes WHERE user_id = %s AND is_liked = TRUE)
                ORDER BY a.created_at DESC
            """,
            (user_id,)
        )
        artworks = cur.fetchall()
    return [
        Artwork(
            id=artwork[0],
            title=artwork[1],
            imageUrl=artwork[2],
            createdAt=str(artwork[3]),
            authorId=artwork[4],
            topicId=artwork[5],
            authorIconUrl=artwork[6]
        ) for artwork in artworks
    ]