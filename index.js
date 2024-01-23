'use strict';
const express= require('express');
const app=express();
const router=require("./routes/router");
const bodyParser = require('body-parser');
const port=process.argv.port || 1005;
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.send("<center><h1>Welcome to the Microservice World!.</h1></center>");
});
app.set('json spaces', 2);

//Middleware to handle all routes
app.use("/",router);

const connectionString='mongodb://localhost:27017/uas'
mongoose.connect(connectionString).then(()=>{
    app.listen(port,function(){
        console.log("App Is Running on Port "+port);
    })
})

//For Catching uncaught exception 

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
    console.error(err.stack)
    process.exit(1)
})

module.exports = app;