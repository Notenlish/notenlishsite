#!/usr/bin/env bash
git fetch
git pull
npm ci
npm run build
rm -rf /var/www/notenlish
cp ./out /var/www/notenlish -r
