const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
    name:{
        type : String ,
        required : true,
    },
    age : {
        type : Number ,
        required : true,
    },
    userName : {
        type : String ,
        required : true
    }
    }
)

const UserModel = new  mongoose.model('users',userSchema)
module.exports = UserModel ;

