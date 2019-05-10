#!/bin/bash

./wait-for-it.sh sea-todos-mysql:3306 --timeout=30 -- python manage.py db upgrade;

init_db() {
  python manage.py db migrate;
  python manage.py db upgrade;
}

init_db
/start.sh