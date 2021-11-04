const http = require('http');

const hostname = '127.0.0.1'

const port = 3000;

const server = http.createServer((req, res)=>{

  res.statusCode = 404;

    res.setHeader('Content-Type', 'text/html');

    res.end('<h1>Osvaldo was here</h1>');
});

server.listen(port, hostname, () => {
    console.log('el servidor se esta ejecutando en http: //127.0.0.1:3000/');
});