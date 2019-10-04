FROM node:10-alpine

LABEL maintainer="Fahim Shahrier Rasel <fahimshahrier2@gmail.com>"

WORKDIR /opt/backend-app

RUN apk update && apk add yarn

COPY . .

RUN yarn