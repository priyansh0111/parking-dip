const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    plateNumber: {
        type: String, 
        required: true, 
    },
    time: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Log", logSchema)