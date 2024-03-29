const { validationResult }=require("express-validator")
const petsModel= require("../model/pets");
const ownerModel= require("../model/owners");
const { request } = require("express");


// exports.getData=async (req,res,next)=>{
//     const dataPets= await petsModel.find();
//     return res.status(200).json({
//         success:true,
//         data:dataPets

//     })

// }

// petsController.js
// petsController.js
// petsController.js
// petsController.js
exports.getData = async (req, res, next) => {
    try {
        const dataPets = await petsModel.find().populate('owner'); // Gunakan populate untuk menggantikan ID owner dengan data pemilik
        res.render('petdoc', {
            layout: 'layouts/main-layouts',
            title: 'Grooming',
            data: dataPets
        });
        
    } catch (error) {
        console.error(error);
        next(error);
    }
};





// petsController.js
// petsController.js
exports.getDataById=async (req,res,next)=>{
    const id=req.params.id;
    console.log(id)
    var dataPets=await petsModel.findById(id)
    dataPets= await dataPets
    res.render('detail', {
        layout:'layouts/main-layouts',
        title:'detail',
         data: dataPets });
 
 }




 exports.deleteDataById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const dataPets = await petsModel.findByIdAndDelete(id);
        
        // Redirect ke halaman petdoc.ejs setelah penghapusan berhasil
        return res.redirect('/petdoc');
    } catch (error) {
        console.error(error);
        next(error);
    }
};


exports.getEditForm = async (req, res, next) => {
    try {
        const id = req.params.id;
        const pet = await petsModel.findById(id);
        const ownersData = await ownerModel.find();

        res.render('edit', {
            layout: 'layouts/main-layouts',
            title: 'Edit Data',
            data: pet,
            owners: ownersData
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
// petsController.js

exports.updateDataById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        const dataPets = await petsModel.findByIdAndUpdate(id, newData);

        // Setelah pembaruan berhasil, redirect ke halaman petdoc.ejs
        return res.redirect('/petdoc');
    } catch (error) {
        console.error(error);
        next(error);
    }
};




exports.postData = async (req, res, next) => {
    try {
        // Ambil data dari formulir
        const { name, jenis_hewan, ras, service, owner } = req.body;

        // Buat objek baru dari model
        const newPet = new petsModel({
            name,
            jenis_hewan,
            ras,
            service,
            owner
        });

        // Simpan data ke dalam database
        await newPet.save();

        return res.redirect('/petdoc');
    } catch (error) {
        console.error(error);
        next(error);
    }
};
exports.getOwners = async (req, res, next) => {
    try {
       const ownersData = await ownerModel.find();
       res.status(200).json({
          success: true,
          data: ownersData
       });
    } catch (error) {
       console.error(error);
       next(error);
    }
 };