const mongoose = require('mongoose')

mongoose.connect('add your data base ')
.then (()=>{
    console.log("connected to database ");
})
.catch((error)=>{
    console.log(error);
})
