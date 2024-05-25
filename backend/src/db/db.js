const mongoose = require('mongoose')

mongoose.connect('../././')
.then (()=>{
    console.log("connected to database ");
})
.catch((error)=>{
    console.log(error);
})
