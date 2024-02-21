const mongoose = require("mongoose")

const schema = new mongoose.Schema(
    {
        name:{
            type: String
        },

        email:{
            type: String,
            required: [true, 'Email is required']
        },

        password:{
            type: String,
            required: [true, 'Password is required']
        },

        role:{
            type: String,
            required: [true, 'Role is required']
        },

        flag:{
            type: Number,
            default: 0
        }
    }
)

const LoginModule = mongoose.model("tbl_login",schema);
module.exports = LoginModule;