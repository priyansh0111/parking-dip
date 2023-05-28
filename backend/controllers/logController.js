const Log = require('../models/log')
const bcrypt = require('bcrypt')
const path = require('path')

const userControl = {
    getInsertLog: async (req, res) => {
        try {
            const {plateNumber} = req.query;
            const d = new Date();
            time = d.toString();
            const newLog = new Log({
                plateNumber: plateNumber, 
                time: time, 
            })
            await newLog.save()
            res.json({message: "User logged succesfully! :"})
        } catch (err) {
            return res.status(200).json({message: err.message})
        }
    },
}

module.exports = userControl