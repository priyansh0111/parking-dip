const Data = require('../models/data')
const bcrypt = require('bcrypt')

const userControl = {
    getCheckPlate: async (req, res) => {
        try {
            const plateNumber = req.query.plateNumber;
            console.log(plateNumber);
            const value = await Data.findOne({plateNumber: plateNumber})
            if(!value) {
                res.json({foundInDatabase: "No"});
            } else {
                res.json({foundInDatabase: "Yes"});
            }
        } catch (err) {
            return res.status(200).json({message: err.message})
        }
    },
    checkPlate: async (req, res) => {
        try {
            console.log(req.body);
            const {plateNumber} = req.body;
            console.log(plateNumber);
            const value = await Data.findOne({plateNumber: plateNumber})
            console.log(value)
            if(!value) {
                res.json({foundInDatabase: "No"});
            } else {
                res.json({foundInDatabase: "Yes"});
            }
        } catch (err) {
            return res.status(200).json({message: err.message})
        }
    },
    insertData: async (req, res) => {
        const {plateNumber, firstName, lastName, phoneNumber} = req.body;
        const d = new Date();
        time = d.toString();
        console.log(plateNumber);
        console.log(firstName);
        console.log(lastName);
        console.log(phoneNumber);
        const newData = new Data({
            plateNumber: plateNumber, 
            firstName: firstName, 
            lastName: lastName, 
            phoneNumber: phoneNumber, 
            time: time,
        })
        await newData.save()
        // console.log(req.body);
        res.json({message: "User succesfully registered! :"})
    },
    getSearchData: async (req, res) => {
        const {query, type} = req.query;
        console.log(query);
        console.log(type)
        try {
            let value;
            if(type == 'firstname'){
                value = await Data.find({firstName: query})
                console.log(value)
            }else if(type == 'lastname'){
                value = await Data.find({lastName: query})
                console.log(value)
            }else if(type == 'vehicle'){
                value = await Data.find({plateNumber: query})
                console.log(value)
            }else if(type == "phone-number"){
                value = await Data.find({phoneNumber: query})
                console.log(value)
            }else{
                console.log('Unknown query');
            }
            res.json(value);
        } catch (err) {
            return res.status(200).json({message: err.message})
        }
    }, 
}
module.exports = userControl