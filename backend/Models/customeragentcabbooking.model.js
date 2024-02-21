const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        customeragent_id:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_customer_agent'}]
        },

        customer_firstname:{
            type: String,
            require: [true,"Customer Firstname is required"]
        },

        customer_lastname:{
            type: String,
            require: [true,"Customer Lastname is required"]
        },

        customer_email:{
            type: String,
            require: [true,"Customer Email is required"]
        },

        customer_contact_number:{
            type: String,
            require: [true,"Contact Number is required"]
        },

        date:{
            type: Date,
        },

        time:{
            type: String,
            require: [true,"Time is required"]
        },

        from:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_city'}],
            require: [true,"City is required"]
        },

        to:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_city'}],
            require: [true,"City is required"]
        },

        no_of_passengers:{
            type: Number,
            require: [true,"Number of passengers is required"]
        },

        no_of_luggage:{
            type: Number,
            require: [true,"Number of luggage is required"]
        },

        carcategoryid:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_car'}],
            require: [true,"Car category is required"]
        }
    },
    {timestamps: true}
);

const CustomerAgentCabBookModule = mongoose.model("tbl_cagentcabbookeddetails",schema);
module.exports = CustomerAgentCabBookModule;