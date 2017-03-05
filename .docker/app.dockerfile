# create a file named Dockerfile
FROM node:7.5.0-alpine
RUN mkdir /app/
ADD . /app/
WORKDIR /app/
RUN npm install
RUN npm install -g webpack
EXPOSE 9000:9000
CMD ["npm", "build"]

