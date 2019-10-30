#!/bin/bash
set -e
source ~/.nvm/nvm.sh
echo "first variable" >> test.txt
echo $bamboo.nexus_fe_token_password >> test.txt
echo "second variable" >> test.txt
echo $bamboo_nexus_fe_token_password >> test.txt
NPM_TOKEN=$bamboo.nexus_fe_token_password

nvm install v10.16.3
nvm use v10.16.3
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not set nvm version specified in .nvmrc"
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

# switch node versions so we can deploy
nvm use 8.16.0
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not set nvm version to 8.16.0"
  exit 1
fi

npx semantic-release
if [ "$?" -ne 0 ]; then
  echo "ERROR - release failed"
  exit 1
fi
