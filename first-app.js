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
    fs.writeFileSync('message.txt','DUMMY');
    res.statusCode =302;
    res.setHeader('location','/');
    return res.end();


 }



    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>This is written in Server</title></head>');
    res.write('<body><h1> Hi , this is w </h1></body>');
    res.write('</html>');
    res.end();
})
server.listen(3000);