const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const app = express();
const port = 3000;
const hostname = 'localhost';
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express(__dirname + '/public'));
app.use('/dishes', dishRouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});