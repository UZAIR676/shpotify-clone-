const mongoose = require('mongoose')

const emoSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email :{
        type:String,
        required: true
    },
    phone :{
        type:Number,
        required: true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    cpassword:{
        type:String,
        required:true,
        unique:true
    },

});

const empCollection = new mongoose.model('empCollection',emoSchema);

module.exports = empCollection;
