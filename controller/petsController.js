const pets = require("../model/pets")


exports.getData=async (req,res,next)=>{
    const dataPets= await pets.find();
    return res.status(200).json({
        success:true,
        data:dataPets

    })

}
exports.postData=async (req,res,next)=>{

    console.log(req.body.owners);
    var dataOwners= await owners.findById(req.body.owners);

    console.log(dataOwners);
    var dataPets = {
        nama:req.body.nama
    }

}
