'use strict';
const express= require('express');
const app=express();
const bodyParser = require('body-parser');
const port=1067;
const mongoose = require('mongoose');

const petsRouter = require("./router/petsRouter")
const ownerRouter = require("./router/ownerRouter")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.send("<center><h1>Welcome to the Microservice World!.</h1></center>");
});
app.set('json spaces', 2);

//Middleware to handle all routes
app.use("/pets",petsRouter)
app.use("/owners",ownerRouter)


//For Catching uncaught exception 

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
    console.error(err.stack)
    process.exit(1)
})

const connectionString='mongodb://127.0.0.1/uas'

mongoose.connect(connectionString).then(()=>{
    app.listen(port,function(){
        console.log("App Is Running on Port "+port);
    })
})

module.exports = app;