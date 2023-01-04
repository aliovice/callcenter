const asyncHandler = require('express-async-handler')

const contract = require('../models/contractModel')



// get all contract
const getContract = asyncHandler(async (req, res) => {
    const contracts = await contract.find({})
    res.status(200).json(contracts)

})
// get by ID contract
const getContractsById = asyncHandler(async (req, res) => {
    const infos = await contract.findById(req.params.id)
    res.status(200).json(infos)

})

// insert contract

const setContract = asyncHandler(async (req, res) => {
    objeContract = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        adress: req.body.adress,
        date: req.body.date,
        ville: req.body.ville,
        phone:req.body.phone
    }
    if (!objeContract) {
        res.status(400)
        throw new Error('Something wrong');
    } else {
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
// update contract 
const updateContract = asyncHandler(async (req, res) => {

    contract.findById(req.params.id, function (err, items) {
        if (!items)
            res.status(404).send("data is not found");
        else

            items.full_name = req.body.full_name,
            items.phone = req.body.phone;
            items.adress = req.body.adress;
            items.date = req.body.date;
            items.reserved = req.body.reserved;
            items.current_company = req.body.current_company,
            items.prix = req.body.prix,
            items.id = req.body.id,



            items.save().then(items => {
                res.json('Todo updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
    });
});



module.exports = {
    getContract,
    setContract,
    getContractsById,
    updateContract
    // deleteContract
}