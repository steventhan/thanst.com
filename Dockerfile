FROM node:10.16.0-stretch-slim

COPY . /thanst.com 

WORKDIR /thanst.com/client/
RUN npm i && npm run build
RUN rm -rf /thanst.com/server/build/
RUN mv /thanst.com/client/build/ /thanst.com/server/

WORKDIR /thanst.com/server/
RUN npm i
CMD /thanst.com/server/node_modules/.bin/forever server.js

EXPOSE 4000
