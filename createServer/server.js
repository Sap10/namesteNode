const http = require('http');

const server = http.createServer(function(req, res){
    if(req.url === '/getData')
        res.end("no data found!");
    res.end("hello world!");
});

server.listen(8080);