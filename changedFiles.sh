#!/bin/bash 
echo $(/usr/bin/git diff --name-only HEAD...origin/master | awk -F "/*[^/]*/*$" '{ print ($1 == "" ? "." : $1); }' | cut -d "/" -f 1,2 | sed 's/\/e2e//g' | sort | uniq)