#-----------------------------------------------------#
# BUILD
#-----------------------------------------------------#
FROM node:16.20.2-alpine as build

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

