const bcrypt = require('bcrypt');

const DriverAgentModule = require('../Models/driveragent.model');
const LoginModule = require('../Models/login.model');

module.exports = {
    registerDriverAgent: async (req, resp, next) => {
        try {
            const driver_agent = new DriverAgentModule(req.body);
            const name = req.body.first_name;
            const email = req.body.email;
            const password = req.body.password;
            const role = "driveragent";
            const login = new LoginModule({name,email,password,role});

            //if (!req.body.company_name || !req.body.owner_name || !req.body.email || !req.body.phone_number || !req.body.city || !req.body.state || !req.body.country || !req.body.vehicle_details || !req.body.bank_details || !req.body.gumastadhara_number || !req.body.username || !req.body.password) {

            //Generate salt to hash the password
            const salt = await bcrypt.genSalt(10);

            //now we set user password to hashed password
            driver_agent.password = await bcrypt.hash(driver_agent.password, salt);
            login.password = await bcrypt.hash(login.password, salt);

            checkexists_email = await DriverAgentModule.findOne({ email: req.body.email });

            if (checkexists_email) {
                console.log(JSON.stringify("Email Already exists!"));
                return resp.send(JSON.stringify("Email Already exists!"));
            } else {
                let result = await driver_agent.save();
                let response = await login.save();

                if (result) {
                    resp.send(result);
                    console.log(response);
                    return console.log(JSON.stringify("Record Inserted Successfully!!"));
                } else {
                    return resp.send(JSON.stringify("Problem while register the company!!"));
                }
            }
            // }else{
            //     return resp.send("Please provide all the details!!");
            // }

        } catch (err) {
            console.log(err);
        }
    },

    SelectAllDriverAgent: async (req, resp, next) => {
        try {
            let result = await DriverAgentModule.find().populate("countryid","country_name").populate("stateid","state_name").populate("cityid","city_name").select([
                '-password',
                '-__v'
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
    },
}