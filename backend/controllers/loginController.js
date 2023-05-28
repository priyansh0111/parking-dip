const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const path = require('path')

const userControl = {
    loginUser: async (req, res) => {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username: username});
            if(!user) {
                res.json({foundUser: "No"});
            } else {
                bcrypt.compare(password, user.password, function(err, result){
                    if(result){
                        res.json({foundUser: "Yes"});
                    }else{
                        res.json({foundUser: "Wrong Password"});
                    }
                });
            }
        } catch (err) {
            return res.status(200).json({message: err.message})
        }
    },
    getLoginUser: async (req, res) => {
        try {
            const username = req.query.username;
            const password = req.query.password;
            const user = await User.findOne({username: username});
            if(!user) {
                res.json({foundUser: "No"});
            } else {
                bcrypt.compare(password, user.password, function(err, result){
                    if(result){
                        res.json({foundUser: "Yes"});
                    }else{
                        res.json({foundUser: "Wrong Password"});
                    }
                });
            }
        } catch (err) {
            return res.status(200).json({message: err.message})
        }
    },
    enterDetails: async (req, res) => {
        const {username, password} = req.body
        console.log(username)
        console.log(password)
        bcrypt.hash(password, 10, function(err, hash){
            const newUser = new User({
                username: username,
                password: hash
            });    
            newUser.save()
            res.json({message: "User succesfully registered! :)"})
        });
    }
}

module.exports = userControl