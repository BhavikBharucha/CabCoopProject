const CabBookModule = require("../Models/customeragentcabbooking.model");
const CustomerAgentModule = require("../Models/login.model");
const CityModule = require("../Models/city.model");
const CarModule = require("../Models/cardetails.model");

module.exports = {
    bookCab: async (req, resp, next) => {
        try {
            const cab = new CabBookModule(req.body);

            // if(!req.body.customeragent_id || !req.body.customer_firstname || !req.body.customer_lastname || !req.body.customer_email || !req.body.customer_contact_number || !req.body.date || !req.body.time || !req.body.from || !req.body.to || !req.body.no_of_passengers || !req.body.no_of_luggage || !req.body.car_category){
            //     return resp.send(JSON.stringify("Please fill all the fields!!"))
            // }


            let result = await cab.save();

            if (result) {
                return resp.send(JSON.stringify("Cab Booked Successfully!!"))
            } else {
                return resp.send(JSON.stringify("Cab booking failed!!"))
            }

        } catch (err) {
            console.log(err);
        }
    },

    listAllBookedCabDetails: async (req, resp) => {
        try {
            let result = await CabBookModule.find().populate("customeragent_id", "company_name").populate("from", "city_name").populate("to", "city_name").populate("carcategoryid", "car_category");

            if (result) {
                resp.send({ data: result });
            } else {
                resp.send(JSON.stringify("No records found!!"));
            }
        } catch (err) {
            console.log(err);
        }
    }
}