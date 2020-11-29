# node-js.
1. node js is run in server side v8 engine which is build by c++ but i have to write only js no c++ . the node js code is not run in browser it is run in server.
 
 
2. Instalation node js and run with the word > node first-app.js.
3. 4key to create Server
### require
### createServer
### (req,res) 
### .listen()
```javascript
const http = require('http');
const server = http.createServer((req,res) =>{
    console.log(req);
})
server.listen(3000);

```
### response setting
1. 3 key in Response  
### res.setHeader('Content-type','text/html'); res.write(); res.end();
```javascript
const http = require('http');
const server = http.createServer((req,res) =>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>This is written in Server</title></head>');
    res.write('<body><h1> Hi , this is written in Server </h1></body>');
    res.write('</html>');
    res.end();
})
server.listen(3000);
```
### Routing
```javascript  
const http = required('http);
const server = http.createServer((req,res) =>{
const url = req.url;
if ( url === '/'){
 res.write('<head><title>This is Routing</title></head>');
    res.write('<body><form action="/message" method ="POST"> <input type="text" name ="message" ><button type="submit"></button></form></body>');
    res.write('</html>');
    res.end();

}
}

```
### Redirect 
```javascript    
const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res) =>{
 const url = req.url;
 const method = req.method;
  if (url ==="/message" && method === 'POST'){
    fs.writeFileSync('message.txt','DUMMY');
    res.statusCode =302;
    res.setHeader('location','/');
    return res.end();


 }

})
server.listen(3000);

```
### Redirect and parsing body
```javascript
const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res) =>{
 const url = req.url;
 const method = req.method;
 if(url === "/"){
     res.write('<html>');
    res.write('<head><title>This is a message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type = "text" name = "message"> <button type= "submit">Click here</button></form></body>');
    res.write('</html>');
    return  res.end();
 }
 if (url ==="/message" && method === 'POST'){
const body =[];
req.on('data',(chunk) => {
  
   body.push(chunk);
})

req.on('end',() =>{
   const parsedBody = Buffer.concat(body).toString();
   const message = parsedBody.split('=')[1];
   fs.writeFileSync('message.txt',message);
   res.statusCode =302;
   res.setHeader('location','/');
   return res.end();
})
 }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>This is written in Server</title></head>');
    res.write('<body><h1> Hi , this is w </h1></body>');
    res.write('</html>');
    res.end();
})
server.listen(3000);


```
### Single Thread,Event loop & Blocking code
![SingleThread](https://user-images.githubusercontent.com/67328056/100513993-70f92480-319b-11eb-8626-bd6b83c2b347.PNG)

### Event loop
![EventLoop](https://user-images.githubusercontent.com/67328056/100514064-d9e09c80-319b-11eb-9a10-270d7f08ba6d.PNG)

### Redirect from others js file 
1)File name is route.js
### Export 
```javascript
//Three way to export the handler
 module.exports = requestHandler  //number 1

module.exports = {      //number 2
   handler:requestHandler,
    someText :'This is the some text'


 };

 module.exports.handler = requestHandler;
 module.exports.someText ="This is new Things";

exports.handler = requestHandler;
exports.someText = "This is the new Things";

```
## Module summary
![ModuleSummary](https://user-images.githubusercontent.com/67328056/100516247-c38f0c80-31ac-11eb-8ca3-2ecdd8d9da54.PNG)

### >>>Understanding Npm Script
 1) npm init 
 2) In Script add "start" : "node first-app.js"
 3) ### Start is the resurve word. you cant  write npm start-server 
 you have to write npm run start-server.
 ```javascript
 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node first-app.js",
    "start-server": "node first-app.js"
  },
 
 ```
 ### Third party package 
 #### npm install nodemon --save-dev
 ##### nodemon is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected. nodemon does not require any additional changes to your code or method of development
### if the node moduel is delete or you want to work with the project  just write in terminal  $npm install

### after install nodemon > change in package.json "start":"nodemon first-app.js" 
 after that just type in terminal 
 ### npm start
 
