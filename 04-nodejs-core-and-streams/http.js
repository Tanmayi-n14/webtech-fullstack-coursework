

const http=require("http");
const server=http.createServer((req,res)=>
{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello, WELCOME</h1>");
    res.end();
});
server.listen(1234,()=>console.log("Server running at http://localhost:1234"));