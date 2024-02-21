const mongoose = require("mongoose")

const schema = new mongoose.Schema(
    {
        country_name:{
            type: String
        }
    }
)

const CountryModule = mongoose.model("tbl_country",schema);
module.exports = CountryModule