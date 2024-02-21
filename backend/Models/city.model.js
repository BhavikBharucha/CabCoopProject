const mongoose = require("mongoose")

const schema = new mongoose.Schema(
    {
        state_id:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_state'}],
            //require: true
        },

        city_name:{
            type: String,
            //require: true
        }
    }
)

const CityModule = mongoose.model("tbl_city",schema);
module.exports = CityModule;