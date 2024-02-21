const bcrypt = require('bcrypt');

const mongoose = require('mongoose');

const CompanyModule = require('../Models/company.model');
const LoginModule = require('../Models/login.model');

/**
 * API for registration: http://localhost:3000/company/companyregistration
 * {
    "company_name":"urako",
    "owner_name":"Jinuu pet",
    "email":"jinnuuu@company.com",
    "phone_number":"8637415367",
    "city":"surat",
    "state":"1",
    "country":"1",
    "vehicle_details":"abc",
    "bank_details":"abc",
    "gumastadhara_number":"abc",
    "password":"Jinu@123"
}

 * API for retrive data: http://localhost:3000/company/getAllCompanyDetails
 * 
 * API for login: http://localhost:3000/company/login
    
    "email":"jinnuuu@company.com",
    "password":"Jinu@123"
 */

module.exports = {
    registerCompany: async (req, resp, next) => {
        try {
            const company = new CompanyModule(req.body);
            const email = req.body.email;
            const password = req.body.password;
            const role = "company";
            const login = new LoginModule({email,password,role});

            //if (!req.body.company_name || !req.body.owner_name || !req.body.email || !req.body.phone_number || !req.body.city || !req.body.state || !req.body.country || !req.body.vehicle_details || !req.body.bank_details || !req.body.gumastadhara_number || !req.body.username || !req.body.password) {

                //Generate salt to hash the password
                const salt = await bcrypt.genSalt(10);

                //now we set user password to hashed password
                company.password = await bcrypt.hash(company.password, salt);
                login.password = await bcrypt.hash(login.password, salt);

                checkexists_email = await CompanyModule.findOne({email: req.body.email});

                if(checkexists_email){
                    console.log(JSON.stringify("Email Already exists!"));
                    return resp.send(JSON.stringify("Email Already exists!"));
                }else{
                    let result = await company.save();
                    let response = await login.save();
    
                    if (result) {
                        //resp.send(result);
                        console.log(response);
                        return resp.send("Record Inserted Successfully!!");
                    }else{
                        return resp.send("Problem while register the company!!");
                    }
                }
            // }else{
            //     return resp.send("Please provide all the details!!");
            // }

        } catch (err) {
            console.log(err);
        }
    },

    SelectAllCompany: async (req, resp, next) => {
        try {
            let result = await CompanyModule.find().select([
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
    }
}