const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        company_name:{
            type: String
        },

        brand_name:{
            type: String
        },

        owner_name:{
            type: String
        },

        mobile_number:{
            type: Number
        },

        email:{
            type: String
        },

        countryid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_country'}],
        },

        stateid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_state'}],
        },

        cityid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_city'}],
        },
        
        gst_number:{
            type: String
        },

        gumastadhara_number:{
            type: String
        },

        company_pancard:{
            type: String
        },

        owner_adharcard:{
            type: String
        },

        owner_pancard:{
            type: String
        },

        company_address:{
            type: String
        },

        password:{
            type: String
        },

        registerd_date:{
            type: Date,
            default: Date.now()
        }
    },
    {timestamps: true}
);

const CustomerAgentModule = mongoose.model('tbl_customer_agent',schema);
module.exports = CustomerAgentModule;