const server = require('./server/server');
require('dotenv').config();
require('./database/config');
require('request');

const PORT = process.env.PORT || 8080;
server.listen(PORT,() =>{
  console.log(`Servidor Funcionando en puerto ${PORT}`);
});
 