from django.http import HttpResponse
from producer.tasks import slow_task


def hello_world(request):
    task_created = slow_task.enqueue()
    return HttpResponse("Hello, World!")
