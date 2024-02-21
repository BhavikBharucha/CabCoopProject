const mongoose = require("mongoose")

const schema = new mongoose.Schema(
    {
        car_owner_name:{
            type: String
        },

        car_owner_contactno:{
            type: Number
        },

        car_image:{
            type: String
        },

        car_model:{
            type: String
        },

        car_category:{
            type: String
        },
        
        model_number:{
            type: Number
        },
        
        number_plate:{
            type: String
        },

        insurance_expire_date:{
            type: Date
        },

        puc_expire_date:{
            type: Date
        },

        car_registered_date:{
            type: Date,
            default: Date.now()
        }
    },
    {timestamps: true}
);

const CarModule = mongoose.model("tbl_car",schema);
module.exports = CarModule;