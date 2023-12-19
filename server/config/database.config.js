const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
const db_name = process.env.DB_NAME;
mongoose.connect