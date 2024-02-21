const bcrypt = require('bcrypt');

const CustomerAgentModule = require('../Models/customeragent.model');
const LoginModule = require('../Models/login.model');

module.exports = {
    registerCustomerAgent: async (req, resp, next) => {
        try {

            //const path = req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";
            const {gst_number,gumastadhara_number,company_pancard,owner_adharcard,owner_pancard} = req.files;

            var model = {
                company_name: req.body.company_name,
                brand_name: req.body.brand_name,
                owner_name: req.body.owner_name,
                mobile_number: req.body.mobile_number,
                email: req.body.email,
                countryid: req.body.countryid,
                stateid: req.body.stateid,
                cityid: req.body.cityid,
                gst_number: gst_number[0].path.replace(/\\/g, "/"),
                gumastadhara_number: gumastadhara_number[0].path.replace(/\\/g, "/"),
                company_pancard: company_pancard[0].path.replace(/\\/g, "/"),
                owner_adharcard: owner_adharcard[0].path.replace(/\\/g, "/"),
                owner_pancard: owner_pancard[0].path.replace(/\\/g, "/"),
                company_address: req.body.company_address,
                password: req.body.password
            }

            const customer_agent = new CustomerAgentModule(model);

            //return console.log(customer_agent);

            const name = req.body.company_name;
            const email = req.body.email;
            const password = req.body.password;
            const role = "customeragent";
            const login = new LoginModule({name,email,password,role});

            //if (!req.body.company_name || !req.body.owner_name || !req.body.email || !req.body.phone_number || !req.body.city || !req.body.state || !req.body.country || !req.body.vehicle_details || !req.body.bank_details || !req.body.gumastadhara_number || !req.body.username || !req.body.password) {

            //Generate salt to hash the password
            const salt = await bcrypt.genSalt(10);

            //now we set user password to hashed password
            customer_agent.password = await bcrypt.hash(customer_agent.password, salt);
            login.password = await bcrypt.hash(login.password, salt);

            checkexists_email = await CustomerAgentModule.findOne({ email: req.body.email });

            if (checkexists_email) {
                console.log(JSON.stringify("Email Already exists!"));
                return resp.send(JSON.stringify("Email Already exists!"));
            } else {
                let result = await customer_agent.save();

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

    SelectAllCustomerAgent: async (req, resp, next) => {
        try {
            let result = await CustomerAgentModule.find().populate("countryid", "country_name").populate("stateid", "state_name").populate("cityid", "city_name").select([
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