const { validationResult }=require("express-validator")
const mhsatkul= require("../model/pets");
const { request } = require("express");


exports.getData=async (req,res,next)=>{
    const dataPets= await pets.find();
    return res.status(200).json({
        success:true,
        data:dataPets

    })

}

exports.getDataById=async (req,res,next)=>{
    const id= req.params.id;
    const dataPets=await pets.findById(id)
    return res.status(200).json({
        success:true,
        data: dataPets

    });

};

exports.deleteDataById=async (req,res,next)=>{
    const id= req.params.id;
    const dataPets=await pets.findByIdAndDelete(id)
    return res.status(200).json({
        success:true,
        data: dataPets

    });

};

exports.updateDataById=async (req,res,next)=>{
    const id= req.params.id;
    const newData= req.body;
    const dataPets=await pets.findByIdAndUpdate(id,newData)
    return res.status(200).json({
        success:true,
        data: dataPets

    });

};

exports.postData=async (req,res,next)=>{
    const dataPets= new mhs(req.body);
    await dataPets.save();
    return res.status(200).json({
        success:true,
        data:dataPets

    })

}
