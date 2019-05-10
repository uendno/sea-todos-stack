FROM tiangolo/uwsgi-nginx-flask:python3.6

ARG ENV
ENV ENV ${ENV}

RUN apt-get update
RUN apt-get -y install default-libmysqlclient-dev || apt-get -y install libmysqlclient-dev

ADD ./requirements.txt /sea-todos-backend/requirements.txt
ADD ./uwsgi.ini /sea-todos-backend/uwsgi.ini

WORKDIR /sea-todos-backend

RUN pip install -r requirements.txt

COPY . /sea-todos-backend

RUN chmod +x /sea-todos-backend/wait-for-it.sh
RUN chmod +x /sea-todos-backend/run.sh

CMD ./run.sh