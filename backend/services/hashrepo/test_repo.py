from .repository import HashFuncRepository

class TestHashRepository(HashFuncRepository):
    """Test implementation of HashFunctionRepository"""

    def hash(self, value: str) -> str:
        return f"hash({value})"
    
    def compare(self, value: str, hashed_value: str) -> bool:
        return hashed_value == f"hash({value})"