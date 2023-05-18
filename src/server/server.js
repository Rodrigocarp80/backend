const express = require('express');
const productRouter = require('../routes/prodRoutes');

const server = express();

server.use(express.json());

server.get('/',(_,res) => {
    res.send('Servidor funcionando');
});

server.use('/api',productRouter);





module.exports = server;