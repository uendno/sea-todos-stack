from flask import request, jsonify

from main import app
from main.database import db
from main.models.task import TaskModel
from main.schemas.task import TaskSchema
from main.tasks.event import notify_task_list_updated


@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = TaskModel.query.order_by(TaskModel.created.desc()).all()
    return TaskSchema().jsonify(tasks, many=True)


@app.route('/tasks', methods=['POST'])
def post_tasks():
    data = request.get_json()
    task = TaskModel(text=data.get('text'))
    db.session.add(task)
    db.session.commit()
    notify_task_list_updated.delay()
    return jsonify({})


@app.route('/tasks/<int:task_id>', methods=['PUT'])
def put_task(task_id):
    data = request.get_json()
    task = TaskModel.query.get(task_id)

    if task is None:
        return jsonify({
            'error_message': 'Task not found!'
        }), 404

    task.completed = data.get('completed')
    db.session.commit()
    return jsonify({})
