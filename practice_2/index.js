const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        let fileUrl;
        if(req.url === '/') fileUrl = '/index.html';
        else fileUrl = req.url;
        let filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if(fileExt === '.html') {
            fs.exists(filePath, (exists) => {
                if(!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><head><head/><body><h1>Such file does not exist!</h1><body/></html>');
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                }
            })
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><head><head/><body><h1>This is not .html file</h1><body/></html>');
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><head></head><body><h1>Error 404: Request method ' + req.method + ' is not supported</h1></body></html>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});