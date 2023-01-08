const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
        },
        imageTitle:{
            type:String,
        },
        imageSmall:{
            type:String,
        },
        trailer:{
            type:String
        },
        video:{
            type:String
        },
        yaer:{
            type:String
        },
        limit:{
            type:Number
        },
        genre:{
            type:String
        },
        isSeries:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    },
    {
        collection:'movies'
    }
);

module.exports = mongoose.model('movies', movieSchema);