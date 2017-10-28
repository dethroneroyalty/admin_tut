FROM node:alpine

WORKDIR /app

RUN apk add --no-cache tini

COPY ./package.json .
RUN yarn --production -s

COPY . .

ENTRYPOINT ["/sbin/tini", "--"]
