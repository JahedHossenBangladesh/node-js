# node-js.
1. node js is run in server side v8 engine which is build by c++ but i have to write only js no c++ . the node js code is not run in browser it is run in server.
 
 
2. Instalation node js and run with the word > node first-app.js.
3. 4key to create Server ### require ### createServer ### (req,res) ### .listen()
```javascript
const http = require('http');
const server = http.createServer((req,res) =>{
    console.log(req);
})
server.listen(3000);

```
