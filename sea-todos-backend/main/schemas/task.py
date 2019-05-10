from main.schemas.base import BaseSchema
from marshmallow import fields


class TaskSchema(BaseSchema):
    id = fields.Integer()
    text = fields.String()
    completed = fields.Boolean()
