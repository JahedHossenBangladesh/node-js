const fs = require('fs')

const requestHandler =(req,res) =>{
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
      fs.writeFile('message.txt',message , err =>{
         res.statusCode =302;
         res.setHeader('location','/');
         return res.end();
      });
      
   })
   }
       res.setHeader('Content-Type','text/html');
       res.write('<html>');
       res.write('<head><title>This is written in Server</title></head>');
       res.write('<body><h1> Hi , this is work in server</h1></body>');
       res.write('</html>');
       res.end();
};
//Three way to export the handler
// module.exports = requestHandler  //number 1

// module.exports = {      //number 2
//     handler:requestHandler,
//     someText :'This is the some text'


// };

// module.exports.handler = requestHandler;
// module.exports.someText ="This is new Things";

exports.handler = requestHandler;
exports.someText = "This is the new Things";