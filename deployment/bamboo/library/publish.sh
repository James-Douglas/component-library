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

# This means the prepare scripts need to be idempotent (which they are if they
# are all copy commands). This is so we avoid failures happening after lerna has
# pushed new git tags.
echo "running: lerna run prepare (test lifecycle hook before tags are pushed)"
npx lerna run prepare
if [ "$?" -ne 0 ]; then
  echo "ERROR - prepare lifecycle failed! Good thing we checked this early!"
  exit 1
fi

# Lerna publish will also run the prepare lifecycle commands.
echo "running: lerna publish"
npx lerna publish --yes --contents lib
if [ "$?" -ne 0 ]; then
  echo "ERROR - publish failed"
  exit 1
fi
