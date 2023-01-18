# Manor component Library

[Documentation & live demonstration](https://services.dev.comparethemarket.cloud/manor/?path=/docs/welcome--page)

# Quick Start

## 1. Connect to AWS
`aws sso login`

## 2. Export FONT_AWESOME_TOKEN
### Bash
```
export FONT_AWESOME_TOKEN="$(aws ssm get-parameter \
  --with-decryption \
  --name /fontawesome/token \
  --query 'Parameter.Value' \
  --output text \
  --region ap-southeast-2)"
```
### Powershell
```
$env:FONT_AWESOME_TOKEN = $(aws ssm get-parameter `
  --with-decryption `
  --name /fontawesome/token `
  --query 'Parameter.Value' `
  --output text `
  --region ap-southeast-2)
```

## 3. Run Yarn Install
`yarn install`

## 4. Run Storybook
`yarn storybook`
