## Django tasks poc

setup
´´´
pip install -r requirements.txt
python manage.py migrate
´´´

start the worker
´´´
./manage.py db_worker
´´´

start the application
´´´
python manage.py runserver
´´´
access ´http://127.0.0.1:8000/producer/hello/´