const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
const db_name = process.env.DB_NAME;
console.log(dbUrl,db_name)

mongoose.connect(dbUrl,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    autoIndex:true,
})
.then((status)=>console.info(`connection established to ${db_name}`))
.catch((error)=>
console.error(`coiuld not connect to database:${error.message}`));