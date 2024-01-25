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

// ownerController.js

// ...

exports.getOwnersView = async (req, res, next) => {
    try {
        const dataOwners = await owners.find();
        res.render('owners', {
            layout: 'layouts/main-layouts',
            title: 'Owners',
            ownersData: dataOwners
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};


exports.getEditOwnerForm = async (req, res, next) => {
    try {
        const id = req.params.id;
        const owner = await owners.findById(id);

        res.render('editOwner', {
            layout: 'layouts/main-layouts',
            title: 'Edit Pemilik',
            ownerData: owner
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.updateOwnerById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        const updatedOwner = await owners.findByIdAndUpdate(id, newData);

        return res.redirect('/owners/view');
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.deleteOwnerById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedOwner = await owners.findByIdAndDelete(id);

        return res.redirect('/owners/view');
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.postData = async (req, res, next) => {
    try {
        // Ambil data dari formulir
        const { nama, alamat, no_hp, email } = req.body;

        // Buat objek baru dari model
        const newOwner = new owners({
            nama,
            alamat,
            no_hp,
            email
        });

        // Simpan data ke dalam database
        await newOwner.save();

        return res.redirect('/owners/view');
    } catch (error) {
        console.error(error);
        next(error);
    }
};
