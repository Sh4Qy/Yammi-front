FROM node:18.16.0-slim

WORKDIR /Yammi-front

COPY . .

RUN npm install

CMD npm start