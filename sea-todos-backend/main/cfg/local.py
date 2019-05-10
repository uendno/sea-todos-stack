from main.cfg.config import _Config


class _LocalConfig(_Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://gotit:123456@127.0.0.1:3306/sea_todos'
    CELERY_BROKER_URL = 'redis://localhost:6379'


config = _LocalConfig
