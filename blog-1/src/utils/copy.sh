#!/bin/sh
cd /Users/gaojianlong/Desktop/后端项目/nodejs-study/blog-1/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log
