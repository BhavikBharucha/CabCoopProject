const CarModule = require("../Models/cardetails.model");

module.exports = {
    saveCarDetails: async (req, resp, next) => {
        try {

            const path = req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

            var model = {
                car_owner_name: req.body.car_owner_name,
                car_owner_contactno: req.body.car_owner_contactno,
                car_image: path != " " ? "" + path : " ",
                car_model: req.body.car_model,
                car_category: req.body.car_category,
                model_number: req.body.model_number,
                number_plate: req.body.number_plate,
                insurance_expire_date: req.body.insurance_expire_date,
                puc_expire_date: req.body.puc_expire_date
            }

            const car = new CarModule(model);

            //return console.log(model);

            let checkCarExists = await CarModule.findOne({ model_number: req.body.model_number });

            if (checkCarExists) {
                return resp.send(JSON.stringify("Car model number already exists!!"))
            }else{
                let result = await car.save();

                if (result) {
                    return resp.send(JSON.stringify("Car Details Saved Successfully!!"))
                } else {
                    return resp.send(JSON.stringify("Car Details Failed!!"))
                }
            }
        } catch (err) {
            console.log(err);
        }
    },

    listCarDetails: async(req,resp,next) => {
        try{
            let result = await CarModule.find();

            if(result){
                resp.send({data: result});
            }
        }catch(err){
            console.log(err);
        }
    }
}