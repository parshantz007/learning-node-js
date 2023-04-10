const http = require('http');

http.createServer((req,resp)=>{
    resp.write("Hello this is parshant");
    resp.end();

}).listen(4500);