const http= require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'context-type':'application\json'});
    res.write(JSON.stringify({name:'Parshant kaushiki',email:'kaushikparshant6358@gmail.com'}));
    res.end();
}).listen(5000);