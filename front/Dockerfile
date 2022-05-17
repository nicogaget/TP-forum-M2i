FROM node:latest AS build
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . . 
RUN npm run build
#port 80 par default
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .