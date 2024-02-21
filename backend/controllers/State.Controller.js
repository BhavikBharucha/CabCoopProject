const StateModule = require("../Models/state.model");
const CountryModule = require("../Models/country.model");

module.exports = {
    saveStateDetails: async (req, resp, next) => {
        try {
            const state = new StateModule(req.body);

            if (!req.body.country_id || !req.body.state_name) {
                return resp.send(JSON.stringify("Please fill all the fields!!"))
            }

            let checkCountryExists = await CountryModule.findOne({ _id: req.body.country_id });
            
            if (checkCountryExists) {
                
                //return resp.send("Country exists!!");
                let checkStateExists = await StateModule.findOne({ state_name: req.body.state_name })

                if (checkStateExists) {
                    return resp.send(JSON.stringify("State already exists!!"));
                } else {
                    let result = await state.save();

                    if (result) {
                        return resp.send(JSON.stringify("State Details Saved Successfully!!"))
                    } else {
                        return resp.send(JSON.stringify("State Details Failed!!"))
                    }
                }

            } else {
                return resp.send("Country not exists!!");
            }

        } catch (err) {
            console.log(err);
        }
    },

    ListAllStateDetails: async (req, resp, next) => {
        try {
            let result = await StateModule.find().populate("country_id","country_name").select([
                "-__v"
            ]);

            //result = result.json()

            if (result) {
                resp.send({ data: result })
            } else {
                resp.send(JSON.stringify("No records found!!"))
            }
        } catch (err) {
            console.log(err);
        }
    },

    ListAllSatateBasedOnCountry: async(req,resp,next) => {
        try {
            let country = req.params.country_id
            let result = await StateModule.find({country_id:country}).populate("country_id","country_name").select([
                "-__v"
            ]);;

            //result = result.json()

            if (result) {
                resp.send({ data: result })
            } else {
                resp.send(JSON.stringify("No records found!!"))
            }
        } catch (err) {
            console.log(err);
        }
    }
}