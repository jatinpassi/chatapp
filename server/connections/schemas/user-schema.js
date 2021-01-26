const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLength:8
    },
})
module.exports = userSchema;