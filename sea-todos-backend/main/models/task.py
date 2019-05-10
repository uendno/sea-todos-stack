from main.database import db
from main.models.base import TimestampMixin


class TaskModel(db.Model, TimestampMixin):
    __tablename__ = 'task'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    text = db.Column(db.String(100), nullable=False)
    completed = db.Column(db.Boolean, default=False)
