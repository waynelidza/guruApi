const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
//create user schema
SALT_WORK_FACTOR = 10;
//create user schema

const  UserSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    GCMID:{
        type:String,
        required:[false,'GCMID field is required']
    },

});




const User = mongoose.model('User',UserSchema);
module.exports=User;