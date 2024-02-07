#!/bin/bash
set -e

source ~/.nvm/nvm.sh

echo "running: nvm install v16.20.2"
nvm install v16.20.2
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not install the correct node version with nvm"
  exit 1
fi

echo "running: nvm use v16.20.2"
nvm use v16.20.2
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not set the correct node version with nvm"
  exit 1
fi

echo "running: git remote set-url origin https://github.com/comparethemarketau/manor-react.git"
git remote set-url origin https://github.com/comparethemarketau/manor-react.git
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not set git remote"
  exit 1
fi

echo "running: git fetch origin"
git fetch origin
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not fetch git"
  exit 1
fi

echo "running: yarn"
yarn --frozen-lockfile
if [ "$?" -ne 0 ]; then
  echo "ERROR - yarn failed"
  exit 1
fi

echo "running: yarn test:ci"
yarn test:ci
if [ "$?" -ne 0 ]; then
  echo "ERROR - tests failed"
  exit 1
fi

echo "running: yarn lint"
yarn lint
if [ "$?" -ne 0 ]; then
  echo "ERROR - linting failed"
  exit 1
fi

echo "running: yarn build"
yarn build
if [ "$?" -ne 0 ]; then
  echo "ERROR - yarn build failed"
  exit 1
fi
