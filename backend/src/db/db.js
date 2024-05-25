const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://uzairlegend480:bYnkcIJgZvkTZGzp@cluster0.teaisqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then (()=>{
    console.log("connected to database ");
})
.catch((error)=>{
    console.log(error);
})