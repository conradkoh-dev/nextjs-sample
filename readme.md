```
yarn init -y
yarn add next react react-dom
```
Add the follwing lines to package.json
```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```
Create a pages directory (the routes will follow the directory structure here).

e.g. a pages/index.js file can be visited from http://localhost:3000/
e.g. a pages/home.js file can be visited from http://localhost:3000/home


Run the command to start the server
```
yarn run dev
```