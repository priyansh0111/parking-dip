const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    plateNumber: {
        type: String, 
        required: true, 
    }, 
    firstName: {
        type: String, 
        required: true, 
    },
    lastName: {
        type: String, 
        required: true
    },
    phoneNumber: {
        type: Number, 
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Data", dataSchema)