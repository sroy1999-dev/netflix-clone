const express = require('express');
const route = express.Router();
const User = require('../models/users');
const CryptoJS = require('crypto-js');
const verify = require('../verifyToken');

//UPDATE
route.put('/:id', verify, async(req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body},{
                new:true
            });
            res.status(200).json(updatedUser);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You can update only your account");
    }
});

//DELETE
route.delete('/:id', verify, async(req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You can delete only your account");
    }
});

//GET
//GET ALL
//GET USER STATS

module.exports = route;