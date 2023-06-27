#-----------------------------------------------------#
# BUILD
#-----------------------------------------------------#
FROM node:12.12.0-alpine as build

ARG NPM_FONTAWESOME_TOKEN
ENV NPM_FONTAWESOME_TOKEN=${NPM_FONTAWESOME_TOKEN}

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn
RUN yarn build-storybook

##-----------------------------------------------------#
## RELEASE
##-----------------------------------------------------#
FROM nginx
RUN apt update && apt install --reinstall ca-certificates
COPY deployment/k8s/nginx.conf ./etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/storybook-static/ .
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
CMD service nginx start

