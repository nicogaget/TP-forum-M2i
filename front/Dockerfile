# FROM node:latest AS build
# WORKDIR /app
# COPY ./package.json .
# RUN npm install
# COPY . . 
# RUN npm run build
# #port 80 par default
# FROM nginx:latest
# WORKDIR /usr/share/nginx/html/
# COPY --from=build /app/dist/front /usr/share/nginx/html

    FROM node:14.17.0-alpine as build-step
    RUN mkdir -p /app
    WORKDIR /app
    COPY package.json /app
    RUN npm install
    COPY . /app
    RUN npm run build

    FROM nginx:1.20.1
    COPY --from=build-step /app/dist/front /usr/share/nginx/html
    EXPOSE 8080:8080