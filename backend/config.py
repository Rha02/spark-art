
from services.hashrepo.repository import HashFuncRepository

class _AppConfig:
    """App-wide configuration"""
    def __init__(
        self, 
        hashrepo: HashFuncRepository
    ):
        self.hashrepo = hashrepo

AppConfig: _AppConfig = None
def init_app_config(hashrepo: HashFuncRepository):
    global AppConfig
    AppConfig = _AppConfig(hashrepo=hashrepo)

def get_app_config() -> _AppConfig:
    return AppConfig