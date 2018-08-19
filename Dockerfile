FROM node:10.9

RUN apt-get update && apt-get install -y netcat
RUN npm install request
ADD https://raw.githubusercontent.com/eficode/wait-for/master/wait-for /bin/wait-for
RUN chmod a+rx /bin/wait-for

WORKDIR /home/node/app
COPY app.js /home/node/app

CMD [ "/bin/wait-for", "ip:80", "--", "node", "./app.js"]
