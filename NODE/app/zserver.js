const http=require("http");

const fs=require('fs');

const home=fs.readFileSync("./NODE/app/index.html");
const about=fs.readFileSync("./NODE/app/about.html");
const services=fs.readFileSync("./NODE/app/services.html");
const contact=fs.readFileSync("./NODE/app/contact.html");


const server =http.createServer((req,res)=>{
    const url=(req.url);
    res.statusCode=200;
    res.setHeader("Content-Type","text/html");

    if(url=='/' || url=='/home' || url=='/index.html')res.end(home);
    else if(url=='/about.html' ||url=='/about') res.end(about);
    else if(url=='/services.html' || url=='/services') res.end(services);
    else if(url=='/contact.html' || url=='/contact') res.end(contact);
    else {
        res.statusCode=200;
        res.end('<h1>ERROR 404</h1><br><p>Bad request</p>')
    }    
})

server.listen(4000,'127.0.0.1',()=>{
    console.log("Server is runnng on 127.0.0.1:4000");
})

console.log("Hii Nodemon"); 