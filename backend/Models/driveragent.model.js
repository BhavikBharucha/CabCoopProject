const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        first_name:{
            type: String
        },

        last_name:{
            type: String
        },

        date_of_birth:{
            type: Date
        },

        email:{
            type: String
        },

        contact_number:{
            type: Number
        },

        address:{
            type: String
        },        
        
        countryid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_country'}],
        },
        
        stateid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_state'}],
            //require: true
        },

        cityid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_city'}],
        },

        postal_code:{
            type: Number
        },

        license_number:{
            type: Number
        },

        license_expire:{
            type: Date
        },

        username: {
            type: String
        },

        password:{
            type: String
        },

        registration_date:{
            type: Date,
            default: Date.now()
        },
        
    },
    {timestamps: true}
);

const DriverAgentModule = mongoose.model("tbl_driver_agents",schema);
module.exports = DriverAgentModule