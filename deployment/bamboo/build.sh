#!/bin/bash

# a utility function for debug messages
exe() { printf "$@" ; $@ ; }

# build docker image
exe "docker build -t quay.io/comparethemarketau/manor:$(git rev-parse HEAD) -f deployment/Dockerfile ."
if [ "$?" -ne 0 ]; then
  echo "ERROR - could not build docker image"
  exit 1
fi

# push docker image to repo
exe "docker push quay.io/comparethemarketau/manor:$(git rev-parse HEAD)"
if [ "$?" -ne 0 ]; then
  echo "ERROR - could not push docker image"
  exit 1
fi
