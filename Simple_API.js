const http = require('http');

const data = require('./data');
const { json } = require('stream/consumers');
http.createServer((re, res) =>{
    res.writeHead(500, {"content-type":"application\json"});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5500);