FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build
EXPOSE 20001
CMD [ "npm", "run", "serve" ]