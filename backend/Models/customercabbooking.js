const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        customer_id:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_customer'}]
        },

        date:{
            type: Date,
            default: Date.now()
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

        car_category:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_car'}],
            require: [true,"Car category is required"]
        }
    },
    {timestamps: true}
);

const CustomerCabBookModule = mongoose.model("tbl_custombercabbookeddetails",schema); // Cab booking done by customer
module.exports = CustomerCabBookModule;