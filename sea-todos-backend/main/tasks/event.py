from main import celery


@celery.task
def notify_task_list_updated():
    print('Task list is updated.')
