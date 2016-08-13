FROM node:latest

RUN npm install

RUN npm start

EXPOSE 3000