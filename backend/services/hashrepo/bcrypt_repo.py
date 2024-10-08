import bcrypt

from services.hashrepo.repository import HashFuncRepository

class BcryptHashRepository(HashFuncRepository):
    """Bcrypt implementation of HashFunctionRepository"""

    def hash(self, value: str) -> str:
        return bcrypt.hashpw(value.encode(), bcrypt.gensalt()).decode()

    def compare(self, value: str, hashed_value: str) -> bool:
        return bcrypt.checkpw(value.encode(), hashed_value.encode())