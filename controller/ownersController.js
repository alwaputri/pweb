const { validationResult }=require("express-validator")
const owners= require("../model/owners");
const { request } = require("express");


exports.getData=async (req,res,next)=>{
    const dataOwners= await owners.find();
    return res.status(200).json({
        success:true,
        data:dataOwners

    })

}

exports.getDataById=async (req,res,next)=>{
    const id= req.params.id;
    const dataOwners=await owners.findById(id)
    return res.status(200).json({
        success:true,
        data: dataOwners

    });

};

exports.deleteDataById=async (req,res,next)=>{
    const id= req.params.id;
    const dataOwners=await owners.findByIdAndDelete(id)
    return res.status(200).json({
        success:true,
        data: dataOwners

    });

};

exports.updateDataById=async (req,res,next)=>{
    const id= req.params.id;
    const newData= req.body;
    const dataOwners=await owners.findByIdAndUpdate(id,newData)
    return res.status(200).json({
        success:true,
        data: dataOwners

    });

};

exports.postData=async (req,res,next)=>{
    const dataOwners= new owners(req.body);
    await dataOwners.save();
    return res.status(200).json({
        success:true,
        data:dataOwners

    })

}
