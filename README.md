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
