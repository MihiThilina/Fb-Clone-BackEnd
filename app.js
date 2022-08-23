const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port =4000;


const url ='mongodb://localhost/faceBook_Clone'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on("open",()=>{
    console.log('MongoDB connected!');
})

app.use(express.json())



app.listen(port,(req,res)=>{
    console.log("express App Listeing on port 4000")
})