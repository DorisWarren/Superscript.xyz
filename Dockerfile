# base builder
FROM node:12-alpine as builder
RUN apk update && apk add build-base autoconf automake libtool pkgconfig nasm && npm install --global gatsby-cli

# deps
WORKDIR /app
COPY ./package*.json ./
RUN mkdir node_modules && npm install

# use gatsby to generate the static site
COPY src ./src/
COPY .* ./
COPY *.js ./
RUN gatsby telemetry --disable && gatsby build

# use nginx to serve
FROM nginx:1.19
COPY --from=builder /app/public /usr/share/nginx/html
