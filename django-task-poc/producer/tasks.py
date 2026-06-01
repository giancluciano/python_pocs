from django.tasks import task
from time import sleep


@task
def slow_task():
    sleep(3)
    