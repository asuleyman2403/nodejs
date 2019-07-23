const http = require('http');
const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;
const app = express();


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1> This page rendered from a server using express </h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is runnning at http://${hostname}:${port}`);
});