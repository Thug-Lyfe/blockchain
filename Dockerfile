FROM node:4.6

RUN mkdir /ucoin
ADD package.json /ucoin/
ADD main.js /ucoin/

RUN cd /ucoin && npm install

EXPOSE 3001
EXPOSE 6001

ENTRYPOINT PEERS=$PEERS npm start