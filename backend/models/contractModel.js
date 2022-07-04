const mongoose = require("mongoose")

const contractSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true, // [true : 'please add a company name']
    
     },
        phone: {
         type: String,
         required: true, // [true : 'please add a company name']

     }, 
     adress: {
         type: String,
         required: true, // [true : 'please add a company name']

     },
     date: {
         type: Date,
         required: true, // [true : 'please add a company name']

     },
     current_company: {
         type: String,
         required: true, // [true : 'please add a company name']

     },
      prix: {
         type: Number,
         required: true, // [true : 'please add a company name']

     }, id: {
         type: String,
         required: true, // [true : 'please add a company name']

     },
},
    {
        timestamps : true
    }

)
module.exports = mongoose.model('contract', contractSchema)