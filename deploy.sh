#!/usr/bin/env bash
sudo apt update
sudo apt install npm
git fetch
git pull
npm ci
npm run build
sudo rm -rf /var/www/notenlish
sudo mkdir -p /var/www
sudo mkdir -p /var/www/notenlish
sudo cp ./out /var/www/notenlish -r
