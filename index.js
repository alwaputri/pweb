'use strict';
const express= require('express');
const expressLayouts = require('express-ejs-layouts');
const app=express();
const router = express.Router();
const bodyParser = require('body-parser');
const port=1067;
const mongoose = require('mongoose');
const petsController = require("./controller/petsController");
const ownerController = require("./controller/ownersController");
const petsRouter = require("./router/petsRouter")
const ownerRouter = require("./router/ownerRouter")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use(expressLayouts);

app.use("/pets",petsRouter);
app.use("/owners",ownerRouter);
app.use("/detail",petsRouter);

app.get("/", (req, res)=>{
    res.render('index',{
        layout:'layouts/main-layouts',
        title:'Home'});
});
app.get("/service", (req, res)=>{
    res.render('service',{
        layout:'layouts/main-layouts',
        title:'Service'});
});
app.get("/about", (req, res)=>{
    res.render('about',{
        layout:'layouts/main-layouts',
        title:'About'});
});
app.get("/grooming", (req, res)=>{
    res.render('grooming',{
        layout:'layouts/main-layouts',
        title:'Grooming'});
});
app.get("/petdoc", petsController.getData);
app.get("/detail/:id", petsController.getDataById);
app.get("/owner", ownerController.getData);
app.get('/add', (req, res) => {
    res.render('add', { 
        layout:'layouts/main-layouts',
        title: 'tambah data' });
});
app.get("/owners", petsController.getOwners);
app.post("/add", petsController.postData);
app.set('json spaces', 2);

//Middleware to handle all routes



//For Catching uncaught exception 

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
    console.error(err.stack)
    process.exit(1)
})

const connectionString='mongodb+srv://rezarseptiann:ZUCHReja5b2yhPZ0@uas.n800kx3.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(()=>{
    app.listen(port,function(){
        console.log("App Is Running on Port "+port);
    })
})
module.exports = router;
module.exports = app;
