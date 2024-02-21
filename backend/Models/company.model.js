const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        company_name:{
            type: String,
            required: [true, 'Company Name is required']
        },

        owner_name:{
            type: String,
            required: [true, 'Owner Name is required']
        },

        email:{
            type: String,
            //required: [true, 'Owner Name is required']
        },

        phone_number:{
            type: Number,
            //required: [true, 'Company's contact number is required']
        },

        countryid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_country'}],
            //required: [true, 'Country details is required']
        },

        stateid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_state'}],
            //required: [true, 'State details is required']
        },

        cityid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_city'}],
            //require: true
        },

        vehicle_details:{
            type: String,
            //required: [true, 'Vehicle details is required']
        },

        bank_details:{
            type: String,
            //required: [true, 'Bank details is required']
        },

        gumastadhara_number:{
            type: String,
            //required: [true, 'Gumastadhara details is required']
        },

        password:{
            type: String
        },

        registerd_date:{
            type: Date,
            default: Date.now()
        },
    },
    {timestamps: true}
);

const CompanyModule = mongoose.model('tbl_company',schema);
module.exports = CompanyModule;