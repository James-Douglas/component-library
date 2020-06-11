#!/bin/bash
set -e
# Token variable needs to be set prior to sourcing nvm completion
export NPM_FONTAWESOME_TOKEN=$bamboo_fa_token_password

source ~/.nvm/nvm.sh

echo "running: nvm install v10.17.0"
nvm install v10.17.0
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not install the correct node version with nvm"
  exit 1
fi

echo "running: nvm use v10.17.0"
nvm use v10.17.0
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not set the correct node version with nvm"
  exit 1
fi

echo "running: lerna publish"
npx lerna publish --yes --contents lib
if [ "$?" -ne 0 ]; then
  echo "ERROR - publish failed"
  exit 1
fi
