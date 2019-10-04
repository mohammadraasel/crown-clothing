FROM node:10-alpine

LABEL maintainer="Fahim Shahrier Rasel<fahimshahrier2@gmail.com>"

WORKDIR /opt/frontend-app

RUN apk update && apk add yarn
RUN yarn add global nodemon

COPY . .

RUN yarn
