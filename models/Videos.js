const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema

const  videoSchema = new Schema({
    name:{
        type:String,
        required:[false,'name  field is required']
    },
    tittle:{
        type:String,
        required:[false,'tittle  field is required']
    },
    Dateuploaded:{
        type:Date,
        required:[false,'Date field is required']
    },
    location:{
        type:String,
        required:[true,'location field is required']
    },
    thumbnail:{
        type:String,
        required:[true,'thumbnail field is required']
    },

});

const videos = mongoose.model('videos',videoSchema);
module.exports= videos;