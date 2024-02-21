const bcrypt = require('bcrypt');

const CustomerModule = require("../Models/customer.model");
const LoginModule = require('../Models/login.model');

module.exports = {
    customerRegistration: async(req,resp,next) => {
        try{
            const customer = new CustomerModule(req.body);

            const name = req.body.first_name;
            const email = req.body.email;
            const password = req.body.password;
            const role = "customer";
            const login = new LoginModule({name,email,password,role});

            if(!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.contactno || !req.body.countryid || !req.body.stateid || !req.body.cityid || !req.body.residential_address || !req.body.password){
                return resp.send(JSON.stringify("Please Fill all the fields!!"));
            }

            //Generate salt to hash the password
            const salt = await bcrypt.genSalt(10);

            //now we set user password to hashed password
            customer.password = await bcrypt.hash(customer.password, salt);
            login.password = await bcrypt.hash(login.password, salt);

            checkexists_email = await CustomerModule.findOne({ email: req.body.email });

            if (checkexists_email) {
                console.log(JSON.stringify("Email Already exists!"));
                return resp.send(JSON.stringify("Email Already exists!"));
            } else {
                let result = await customer.save();

                let response = await login.save();

                if (result) {
                    resp.send(result);
                    console.log(response);
                    return console.log(JSON.stringify("Customer Registered Successfully!!"));
                } else {
                    return resp.send(JSON.stringify("Problem while register the customer!!"));
                }
            }
        }catch(err){
            console.log(err);
        }
    },

    listAllCustomerDetails: async (req, resp, next) => {
        try {
            let result = await CustomerModule.find().populate("countryid", "country_name").populate("stateid", "state_name").populate("cityid", "city_name").select([
                '-password',
                '-__v'
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
}