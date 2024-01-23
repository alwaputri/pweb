const mongoose = require('mongoose');
const scm=mongoose.Schema
const owners= new scm({

    nama: { type:String },
    alamat: { type:String },
    no_hp: { type:Number },
    email: { type:String },
    
});

module.exports=mongoose.model("owners",owners);