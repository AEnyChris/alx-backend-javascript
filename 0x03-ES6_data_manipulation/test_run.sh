#!/usr/bin/env bash

echo 'ESlint test...'

npx eslint "$2"

echo 'Running fix for errors'

npx eslint --fix "$2"

echo 'Test run code'

npm run dev "$1"

echo "#####################"
echo "Done"
