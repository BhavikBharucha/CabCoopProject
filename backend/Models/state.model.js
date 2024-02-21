const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
        country_id:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_country'}],
            //require: true
        },

        state_name:{
            type: String,
            //require: true
        }
    }
)

const StateModule = mongoose.model("tbl_state",schema);
module.exports = StateModule;