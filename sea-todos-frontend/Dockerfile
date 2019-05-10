FROM node:8.11

ARG REACT_APP_ENV
ENV REACT_APP_ENV ${REACT_APP_ENV}

RUN npm i -g pm2

ADD package.json /sea-todos-frontend/package.json
ADD package-lock.json /sea-todos-frontend/package-lock.json

WORKDIR /sea-todos-frontend

RUN npm install

COPY . /sea-todos-frontend

RUN npm run build 

CMD pm2 start server.js && pm2 logs