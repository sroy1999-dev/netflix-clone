const express = require('express');
const route = express.Router();
const User = require('../models/users');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//REGISTER
route.post("/register", async(req, res) => {
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    });
    try{
        const user = await newUser.save();
        res.send(user);
        console.log(user);
    }catch(err) {
        throw err;
    }
});

//LOGIN
route.post("/login", async(req, res) => {
    try{
        const user = await User.findOne({
            email:req.body.email
        });
        !user && res.status(401).json("Incorrect username or password");
        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        originalPassword !== req.body.password && res.status(401).json('Incorrect username or password');
        //THE ACCESS TOKEN AFTER WHICH THE USER WILL BE LOGGED OUT AUTOMATICALLY
        const accessToken = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.SECRET_KEY, {expiresIn:"5d"});
        //THE BELOW COMMAND DISPLAYS ALL THE INFO EXCEPT THE PASSWORD IN THE BODY
        const {password, ...info} = user._doc;
        res.status(200).json({...info, accessToken});
    }catch(err){
        throw err;
    }
});

module.exports = route;