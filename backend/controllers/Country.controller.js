const CountryModule = require("../Models/country.model");

module.exports = {
    saveCountryDetails: async (req,resp,next) => {
        try{
            const country = new CountryModule(req.body);

            if(!req.body.country_name){
                return resp.send(JSON.stringify("Please Enter Country Name!!"))
            }

            let checkCountryExists = await CountryModule.findOne({ country_name: req.body.country_name });

            if(checkCountryExists){
                return resp.send(JSON.stringify("Country already exists!!"));
            }else{
                
                let result = await country.save();
    
                if(result){
                    return resp.send(JSON.stringify("Country Details Saved Successfully!!"))
                }else{
                    return resp.send(JSON.stringify("Country Details Failed!!"))
                }
            }

        }catch(err){
            console.log(err);
        }
    },

    ListAllCountryDetails: async (req, resp, next) => {
        try {
            let result = await CountryModule.find().select([
                "-__v"
            ]);

            //result = result.json()

            if (result) {
                resp.send({data: result})
            }else{
                resp.send(JSON.stringify("No records found!!"))
            }
        } catch (err) {
            console.log(err);
        }
    }
}