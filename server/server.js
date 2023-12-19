const express = require('express');
const cors = require('cors');
const api = require('./routes/routes');
require('./config/enviroment.config')
require('./config/database.config');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/',api);
app.get('*',(req,res)=>{
    res.status(404).json({
        msg:"Sorry,This route is not found on the server",
    })
})
module.exports = app;