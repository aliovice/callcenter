const asyncHandler = require('express-async-handler')

const Company = require('../models/companysModel')



// get all companys
const getCompanys = asyncHandler(async (req,res)=>{
   const companys = await Company.find({})
    res.status(200).json(companys)
   
})
// get one companys
const getCompany = asyncHandler(async (req,res)=>{
//    const companys = await Company.find({"region":req.body.region})
   const companys = await Company.findById(req.params.id)
    res.status(200).json(companys)
   
})

// insert company

const setCompanys = asyncHandler(async (req,res) =>{
    obje = {
        date:req.body.date,
        region:req.body.region,
        tarif:req.body.tarif,
        sex:req.body.sex,
         name:req.body.name,
    }
    if(!obje){
        res.status(400)
        throw new Error('Something wrong');
    }else {
        const company = await Company.create(obje)
        res.status(200).json(company)
    }
})
// delete company

const deleteCompanys = asyncHandler(async (req,res) =>{
   const company = await Company.findById(req.params.id)
    if(!company){
        res.status(400)
        throw new Error('company not found');
    }
    await company.remove()
    res.status(200).json({id:req.params.id})
})



module.exports = {
    getCompanys,
    getCompany,
    setCompanys,
    deleteCompanys
}