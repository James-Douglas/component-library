#!/bin/bash
set -e
export NEXUS_EMAIL=$bamboo_nexus_fe_email
export NEXUS_TOKEN=$bamboo_nexus_fe_password

nvm use 8.16.0
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not set correct nvm version"
  exit 1
fi

git remote set-url origin https://github.com/comparethemarketau/manor-react.git
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not set git remote"
  exit 1
fi

git fetch origin
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not fetch git"
  exit 1
fi

git tag -l
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not fetch git"
  exit 1
fi

yarn
if [ "$?" -ne 0 ]; then
  echo "ERROR - yarn failed"
  exit 1
fi

yarn test:ci
if [ "$?" -ne 0 ]; then
  echo "ERROR - tests failed"
  exit 1
fi

yarn lint
if [ "$?" -ne 0 ]; then
  echo "ERROR - linting failed"
  exit 1
fi

yarn build
if [ "$?" -ne 0 ]; then
  echo "ERROR - yarn build failed"
  exit 1
fi

update() { echo "email=${NEXUS_EMAIL}" >> .npmrc && echo "_auth=${NEXUS_TOKEN}" >> .npmrc ; }
update
if [ "$?" -ne 0 ]; then
  echo "ERROR - npmrc update failed"
  exit 1
fi

npx semantic-release
if [ "$?" -ne 0 ]; then
  echo "ERROR - release failed"
  exit 1
fi
