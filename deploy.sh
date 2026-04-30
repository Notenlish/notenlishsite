#!/usr/bin/env bash
npm ci
npm run build
rm -rf /var/www/notenlish
cp ./out /var/www/notenlish
