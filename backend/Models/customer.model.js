const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        first_name:{
            type: String,
            require: [true, "Firstname is required!!"]
        },

        last_name:{
            type: String,
            require: [true, "Lastname is required!!"]
        },

        email:{
            type: String,
            require: [true, "Email is required!!"]
        },

        contactno:{
            type: Number,
            require: [true, "Contactno is required!!"]
        },

        countryid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_country'}],
            require: [true, "Country is required!!"]
        },

        stateid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_state'}],
            require: [true, "State is required!!"]
        },

        cityid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_city'}],
            require: [true, "City is required!!"]
        },

        residential_address:{
            type: String,
            require: [true, "Residential Address is required!!"]
        },

        password:{
            type: String,
            require: [true, "Password is required!!"]
        },

        registered_date:{
            type: Date,
            default: Date.now()
        }
    },
    {timestamps: true}
);

const CustomerModule = mongoose.model("tbl_customer",schema);
module.exports = CustomerModule;