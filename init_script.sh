#!/bin/bash
npm init -y && \
npm i body-parser compression cors dotenv express morgan next react react-dom && \
npm i -D cross-env eslint nodemon npx && \
npx eslint --init && \
touch .gitignore .env && \
echo -e "node_modules/\npackage-lock.json\n.next/" >> .gitignore && \
mkdir pages public server && \
touch pages/index.jsx public/samplefile.txt server/index.js && \
echo -e "Hello, World!" >> public/samplefile.txt
