#-----------------------------------------------------#
# BUILD
#-----------------------------------------------------#
FROM node:10.17.0-alpine as build

ARG bamboo_nexus_fe_token_password
ENV bamboo_nexus_fe_token_password=${bamboo_nexus_fe_token_password}

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
