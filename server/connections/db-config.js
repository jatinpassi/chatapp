const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.DB_HOST,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
module.exports =  conn;