const http = require('http');

http.createServer((req, res) => {
    res.write("<h1>Hello,This is Aryan Kumar!</h1>");
    res.end();
}).listen(4000);