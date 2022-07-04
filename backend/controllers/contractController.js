const asyncHandler = require('express-async-handler')

const contract = require('../models/contractModel')



// get all companys
const getContract = asyncHandler(async (req,res)=>{
   const contracts = await contract.find({})
    res.status(200).json(contracts)
   
})

// insert company

const setContract = asyncHandler(async (req,res) =>{
    objeContract = {
        full_name:req.body.full_name,
        phone:req.body.phone,
        adress:req.body.adress,
        date:req.body.date,
        current_company:req.body.current_company,
        prix:req.body.prix,
        id:req.body.id
    }
    if(!objeContract){
        res.status(400)
        throw new Error('Something wrong');
    }else {
        const contracts = await contract.create(objeContract)
        res.status(200).json(contracts)
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
    getContract,
    setContract,
    // deleteContract
}