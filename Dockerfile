FROM node:6
LABEL name "english-words-app"

ADD . /app
WORKDIR /app
RUN ./run.sh

EXPOSE 3000
CMD  forever ./server/app.js
