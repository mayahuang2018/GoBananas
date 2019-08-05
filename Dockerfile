FROM node:latest
#FROM node:11.3.0-alpine


WORKDIR /app

# Getting server dependencies for image
COPY server/package.json /app
COPY server/yarn.lock /app

RUN yarn

# Adding  server-side / api files to image
ADD server /app

#seedDB

# Preparing client files for production and docker image
RUN mkdir /client
COPY client/package.json /client
COPY client/yarn.lock /client

RUN cd /client && \
    yarn

ADD client /client

RUN cd /client && \
    yarn run build

RUN rm -fr /app/public/* && \
    mv /client/build/* /app/public

# Clean up old client file from docker image
RUN rm -fr /client

# Start server for containers
CMD yarn start