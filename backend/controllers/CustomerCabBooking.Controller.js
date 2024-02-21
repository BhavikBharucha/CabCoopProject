const CabBookModule = require("../Models/customercabbooking");
const CustomerModule = require("../Models/customer.model");
const CityModule = require("../Models/city.model");
const CarModule = require("../Models/cardetails.model");

module.exports = {
    bookCab: async (req,resp,next) => {
        try{
            const cab = new CabBookModule(req.body);

            if(!req.body.customer_id || !req.body.date || !req.body.time || !req.body.from || !req.body.to || !req.body.no_of_passengers || !req.body.no_of_luggage || !req.body.car_category){
                return resp.send(JSON.stringify("Please fill all the fields!!"))
            }

            let checkCustomerExists = await CustomerModule.findOne({_id: req.body.customer_id});
            let checkCityExists = await CityModule.findOne({_id: req.body.from});

            if(checkCustomerExists){

                if(checkCityExists){
                    let checkCarExists = await CarModule.findOne({_id: req.body.car_category});
    
                    if(checkCarExists){
                        let result = await cab.save();
    
                        if(result){
                            return resp.send(JSON.stringify("Cab Booked Successfully!!"))
                        }else{
                            return resp.send(JSON.stringify("Cab booking failed!!"))
                        }
                    }else{
                        return resp.send(JSON.stringify("Car category not valid!!"))
                    }
                }else{
                    return resp.send(JSON.stringify("City not valid!!"))
                }
            }else{
                return resp.send(JSON.stringify("CustomerAgent not valid!!"))
            }

        }catch(err){
            console.log(err);
        }
    },

    listAllBookedCabDetails: async(req,resp) => {
        try{
            let result = await CabBookModule.find().populate("customer_id","first_name").populate("from","city_name").populate("to","city_name").populate("car_category","car_category");

            if(result){
                resp.send({data: result});
            }else{
                resp.send(JSON.stringify("No records found!!"));
            }
        }catch(err){
            console.log(err);
        }
    }
}