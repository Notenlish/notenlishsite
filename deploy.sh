#!/usr/bin/env bash
sudo apt update
sudo apt install npm
git fetch
git pull
npm ci
npm run build
rm -rf /var/www/notenlish
cp ./out /var/www/notenlish -r
