const StateModule = require("../Models/state.model");
const CityModule = require("../Models/city.model");

module.exports = {
    saveCityDetails: async (req, resp, next) => {
        try {
            const city = new CityModule(req.body);

            if (!req.body.state_id || !req.body.city_name) {
                return resp.send(JSON.stringify("Please fill all the fields!!"))
            }

            let checkStateExists = await StateModule.findOne({ _id: req.body.state_id });

            if (checkStateExists) {
                let checkCityExists = await CityModule.findOne({ city_name: req.body.city_name });

                if (checkCityExists) {
                    return resp.send(JSON.stringify("City already exists!!"));
                } else {
                    let result = await city.save();

                    if (result) {
                        return resp.send(JSON.stringify("City Details Saved Successfully!!"))
                    } else {
                        return resp.send(JSON.stringify("City Details Failed!!"))
                    }
                }
            } else {
                return resp.send("State not exists!!");
            }
        } catch (err) {
            console.log(err);
        }
    },

    ListAllCityDetails: async (req, resp, next) => {
        try {
            let result = await CityModule.find().populate("state_id","state_name").select([
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

    ListAllCityBasedOnState: async(req,resp,next) => {
        try {
            let state = req.params.state_id
            let result = await CityModule.find({state_id:state}).populate("state_id","state_name").select([
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