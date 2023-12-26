const http=require('http');
const fs=require('fs');

const source=fs.readFileSync('./NODE/server/index.html');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end(source);
})

server.listen('4000','127.0.0.1',()=>{
    console.log("Server is running");
})