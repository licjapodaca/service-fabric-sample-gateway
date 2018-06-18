FROM justicia4gdevops.azurecr.io/base/node:10.4.1-nano

RUN mkdir \app
WORKDIR /app

COPY package.json package.json
RUN npm install
COPY . .

CMD [ "npm.cmd", "start" ]