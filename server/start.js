require('dotenv').config();
const server = require('./server');
const portno = process.env.PORT_NO ;
server.listen(portno,()=>console.info(`server is listing at port ${portno}`))