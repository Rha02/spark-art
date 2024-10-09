
from services.authrepo.repository import AuthTokenRepository
from services.hashrepo.repository import HashFuncRepository

class _AppConfig:
    """App-wide configuration"""
    def __init__(
        self, 
        hashrepo: HashFuncRepository,
        authrepo: AuthTokenRepository 
    ):
        self.hashrepo = hashrepo
        self.authrepo = authrepo

AppConfig: _AppConfig = None
def init_app_config(hashrepo: HashFuncRepository, authrepo: AuthTokenRepository):
    global AppConfig
    AppConfig = _AppConfig(hashrepo=hashrepo, authrepo=authrepo)

def get_app_config() -> _AppConfig:
    return AppConfig