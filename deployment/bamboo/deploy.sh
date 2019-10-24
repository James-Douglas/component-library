#!/bin/bash
echo "setting DOCKER_TAG to ${bamboo_planRepository_revision}"
export DOCKER_TAG="${bamboo_planRepository_revision}"

# Check the generated manifest
echo "-------------------------------------"
echo "Generated manifest:"
echo "-------------------------------------"
envsubst < ./deployment/k8s/manor.yml | cat
echo "-------------------------------------"
echo "/Generated manifest"
echo "-------------------------------------"


kubectl config use-context k8s.dev.comparethemarket.cloud
if [ "$?" -ne 0 ]; then
  echo "ERROR - could not set kubernetes context"
  exit 1
fi


envsubst < ./deployment/k8s/manor.yml | kubectl apply -f -
if [ "$?" -ne 0 ]; then
  echo "ERROR - could not apply kubernetes context"
  exit 1
fi


kubectl rollout status deployment/manor-deployment --watch
if [ "$?" -ne 0 ]; then
  echo "ERROR - could not deploy manor"
  exit 1
fi
