FROM node:10.9

RUN npm install request

WORKDIR /home/node/app
COPY app.js /home/node/app

CMD ["node", "./app.js"]
