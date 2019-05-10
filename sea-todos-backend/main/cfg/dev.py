from main.cfg.config import _Config


class _DevConfig(_Config):
    DEBUG = False
    CELERY_BROKER_URL = 'redis://sea-todos-redis:6379'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://gotit:123456@sea-todos-mysql:3306/sea_todos'


config = _DevConfig
