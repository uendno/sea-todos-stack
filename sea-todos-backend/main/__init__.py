from flask import Flask
from flask_cors import CORS
from celery import Celery

from main.config import config
from main.database import db

app = Flask(__name__)
app.config.from_object(config)
CORS(app)

db.init_app(app)

celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'])
celery.conf.update(app.config)


def _register_subpackages():
    import main.controllers
    import main.tasks


_register_subpackages()


# This is to prevent browser from caching APIs response since
# it might cause some weird bugs if the browser did
@app.after_request
def prevent_browser_caching(response):
    response.headers['Cache-Control'] = 'no-cache'
    response.headers['Pragma'] = 'no-cache'
    return response
