const mongoose = require("mongoose")

const companysSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true, // [true : 'please add a company name']
    
     },
      region: {
         type: String,
         required: true, // [true : 'please add a company name']

     }, 
     tarif: {
         type: Number,
         required: true, // [true : 'please add a company name']

     },
     sex: {
        type: String,
        required: true, // [true : 'please add a company name']

    },
    name: {
        type: String,
        required: true, // [true : 'please add a company name']

    },
},
    {
        timestamps : true
    }

)
module.exports = mongoose.model('company', companysSchema)