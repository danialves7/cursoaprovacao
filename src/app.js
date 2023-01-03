require('dotenv').config()
import express from 'express';
import routes from './routes';
const http = require ('http');

const SECRET_KEY = process.env.SECRET_KEY;

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('paralelepipedo: '+SECRET_KEY);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://localhost:3001');

});

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;
