FROM node:16

WORKDIR /usr/src/myapp

COPY package*.json ./

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN npm install

COPY . .


CMD [ "node", "server.js" ]