const asyncHandler = require('express-async-handler')

const info = require('../models/informationModel')



// get all companys
const getInformations = asyncHandler(async (req,res)=>{
   const infos = await info.find({})
    res.status(200).json(infos)
   
})

// insert company

const setInformations = asyncHandler(async (req,res) =>{
    objeInfo = {
        full_name:req.body.full_name,
        phone:req.body.phone,
        adress:req.body.adress,
        date:req.body.date
    }
    if(!objeInfo){
        res.status(400)
        throw new Error('Something wrong');
    }else {
        const infos = await info.create(objeInfo)
        res.status(200).json(infos)
    }
})
// delete contract

// const deleteContract = asyncHandler(async (req,res) =>{
//    const company = await Company.findById(req.params.id)
//     if(!company){
//         res.status(400)
//         throw new Error('company not found');
//     }
//     await company.remove()
//     res.status(200).json({id:req.params.id})
// })



module.exports = {
    getInformations,
    setInformations,
    // deleteContract
}