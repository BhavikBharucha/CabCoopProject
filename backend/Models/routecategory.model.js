const mongoose = require("mongoose")

const schema = new mongoose.Schema(
    {
        category:{
            type: String,
            required: [true, 'Category is required']
        },

        amount:{
            type: Number,
            required: [true, 'Amount is required']
        }
    }
);

const RouteCategoryModule = mongoose.model("tbl_routercategory",schema);
module.exports = RouteCategoryModule;