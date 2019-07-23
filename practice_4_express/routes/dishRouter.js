const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('This request has to send you list of all dishes');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Nowhere to add, sorry, this method is not supported in present!');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Nowhere to put, this is method is not allowed yet!');
    }) 
    .delete((req, res, next) => {
        res.end('Be careful, this request might delete all dishes!');
    });

module.exports = dishRouter;