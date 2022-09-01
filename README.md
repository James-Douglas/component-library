# Manor component Library

[Documentation & live demonstration](https://services.dev.comparethemarket.cloud/manor/?path=/docs/welcome--page)

# connect to AWS
aws sso login

# export FONT_AWESOME_TOKEN
export FONT_AWESOME_TOKEN="$(aws ssm get-parameter \
  --with-decryption \
  --name /fontawesome/token \
  --query 'Parameter.Value' \
  --output text \
  --region ap-southeast-2)"

# install
yarn install
# run
yarn storybook
