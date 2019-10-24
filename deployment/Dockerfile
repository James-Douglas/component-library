#-----------------------------------------------------#
# BUILD
#-----------------------------------------------------#
FROM node:8.16.2-alpine as build

ARG NEXUS_EMAIL
ENV NEXUS_EMAIL=${NEXUS_EMAIL}
ARG NEXUS_TOKEN
ENV NEXUS_TOKEN=${NEXUS_TOKEN}

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn
RUN yarn build-storybook

##-----------------------------------------------------#
## RELEASE
##-----------------------------------------------------#
FROM nginx
COPY deployment/k8s/nginx.conf ./etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/storybook-static/ .
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
CMD service nginx start
