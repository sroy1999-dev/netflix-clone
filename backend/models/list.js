const mongoose = require('mongoose');

const listSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        type:{
            type:String,
        },
        genre:{
            type:String
        },
        content:{
            type:Array
        }
    },
    {
        timestamps:true
    },
    {
        collection:'lists'
    }
);

module.exports = mongoose.model('lists', listSchema);