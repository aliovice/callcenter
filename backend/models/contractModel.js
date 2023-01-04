const mongoose = require("mongoose")

const contractSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true, // [true : 'please add a company name']
    
     },
        prenom: {
         type: String,
         required: true, // [true : 'please add a company name']

     }, 
     adress: {
         type: String,
         required: true, // [true : 'please add a company name']

     },
     ville: {
         type: String,
         required: true, // [true : 'please add a company name']

     },
      phone: {
         type: Number,
         required: true, // [true : 'please add a company name']

     }, date: {
         type: Date,
         required: true, // [true : 'please add a company name']
         min: new Date(),
     },
},
    {
        timestamps : true
    }

)
module.exports = mongoose.model('contract', contractSchema)