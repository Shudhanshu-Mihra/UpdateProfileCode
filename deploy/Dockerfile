FROM node:18.0 as build-stage

WORKDIR /app
COPY package.json /app/package.json
RUN npm install --legacy-peer-deps
COPY . /app
RUN npm run build


FROM nginx:alpine

COPY ./deploy/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
