const mongoose = require('mongoose');
const scm = mongoose.Schema;

const pets= new scm({
    name: { type:String },
    jenis_hewan: { type:String },
    ras: { type:String },
    service: {type:String},
    owner:{type:Object}
});

module.exports=mongoose.model("pets",pets);