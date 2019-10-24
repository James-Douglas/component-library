#!/bin/bash
export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

## a utility function for debug messages
exe() { printf "$@" ; $@ ; }

exe "git remote set-url origin https://github.com/comparethemarketau/manor-react.git"
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not set git remote"
  exit 1
fi

exe "git fetch"
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not fetch git"
  exit 1
fi

exe "git tag -l"
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not fetch git"
  exit 1
fi

exe "nvm install 10 && nvm use 10"
if [ "$?" -ne 0 ]; then
  echo "ERROR - Could not set the node version"
  exit 1
fi

exe "yarn"
if [ "$?" -ne 0 ]; then
  echo "ERROR - yarn failed"
  exit 1
fi

exe "yarn test:ci"
if [ "$?" -ne 0 ]; then
  echo "ERROR - tests failed"
  exit 1
fi

exe "yarn lint"
if [ "$?" -ne 0 ]; then
  echo "ERROR - linting failed"
  exit 1
fi

exe "yarn build"
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

exe "npx semantic-release"
if [ "$?" -ne 0 ]; then
  echo "ERROR - release failed"
  exit 1
fi
