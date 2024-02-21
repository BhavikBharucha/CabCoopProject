require('dotenv').config();
const Jwt = require('jsonwebtoken');
const jwtKey = process.env.MY_COOPTOKEN_KEY;
const bcrypt = require('bcrypt');

const LoginModule = require("../Models/login.model");

module.exports = {
    login: async (req, resp, next) => {
        try {
            if (req.body.email && req.body.password) {

                let result = await LoginModule.findOne({ email: req.body.email });

                if (result) {
                    const validatePassword = await bcrypt.compare(req.body.password, result.password);

                    if (validatePassword) {
                        if (result.flag == 0) {
                            console.log("Your status is deactive right now!!");
                            return resp.send(JSON.stringify("Your status is deactive right now!!"));
                        } else {

                            if (result.role === "admin") {
                                Jwt.sign(
                                    { result },
                                    jwtKey,
                                    { expiresIn: '2h' },
                                    (error, token) => {
                                        if (error) {
                                            return resp.send('something went wrong');
                                        }
                                        resp.send({ result, auth: token, role: result.role });
                                        // localStorage.setItem('token', token);
                                    }
                                );
                            }

                            if (result.role === "customer") {
                                Jwt.sign(
                                    { result },
                                    jwtKey,
                                    { expiresIn: '2h' },
                                    (error, token) => {
                                        if (error) {
                                            return resp.send('something went wrong');
                                        }
                                        resp.send({ result, auth: token, role: result.role });
                                        // localStorage.setItem('token', token);
                                    }
                                );
                            }

                            if (result.role === "customeragent") {
                                Jwt.sign(
                                    { result },
                                    jwtKey,
                                    { expiresIn: '2h' },
                                    (error, token) => {
                                        if (error) {
                                            return resp.send('something went wrong');
                                        }
                                        resp.send({ result, auth: token, role: result.role });
                                        // localStorage.setItem('token', token);
                                    }
                                );
                            }

                            if (result.role === "driveragent") {
                                Jwt.sign(
                                    { result },
                                    jwtKey,
                                    { expiresIn: '2h' },
                                    (error, token) => {
                                        if (error) {
                                            return resp.send('something went wrong');
                                        }
                                        resp.send({ result, auth: token, role: result.role });
                                        // localStorage.setItem('token', token);
                                    }
                                );
                            }

                            if (result.role === "company") {
                                Jwt.sign(
                                    { result },
                                    jwtKey,
                                    { expiresIn: '2h' },
                                    (error, token) => {
                                        if (error) {
                                            return resp.send('something went wrong');
                                        }
                                        resp.send({ result, auth: token, role: result.role });
                                        // localStorage.setItem('token', token);
                                    }
                                );
                            }

                        }
                    } else {
                        resp.send(JSON.stringify("Invalid Email or Password!"));
                    }
                } else {
                    // throw createError(404, 'usernot found');
                    resp.send(JSON.stringify("Invalid Email or Password!"))
                }
            } else {
                return resp.send(JSON.stringify('Invalid creadential'));
            }
        } catch (err) {
            console.log(err);
        }
    },

    //Active: Set flag to 1
    updateFlagToActive: async (req, resp, next) => {
        try {
            const id = req.params.id;

            const checkstatus = await LoginModule.findById(id);

            //console.log(checkstatus.flag);

            //if status is already active, no need to process again
            if(checkstatus.flag == 1)
            {
                return resp.send({data: checkstatus});
            }

            let updates={flag:1};

            const options = {
                new: true
            };
            const result = await LoginModule.findByIdAndUpdate(
                id,
                updates,
                options
            );


            if(result)
            {
                return resp.send({data: result});
            }else{
                return resp.send({msg: "Failed to update status"});
            }
        } catch (err) {
            console.log(err);
        }
    },

    //Deactive: Set flag to 0
    updateFlagToDeactive: async (req, resp, next) => {
        try {
            const id = req.params.id;

            const checkstatus = await LoginModule.findById(id);

            //console.log(checkstatus.flag);

            //if status is already deactive, no need to process again
            if(checkstatus.flag == 0)
            {
                return resp.send({data: checkstatus});
            }

            let updates={flag:0};

            const options = {
                new: true
            };
            const result = await LoginModule.findByIdAndUpdate(
                id,
                updates,
                options
            );

            if(result)
            {
                return resp.send({data: result});
            }else{
                return resp.send({msg: "Failed to update status"});
            }
        } catch (err) {
            console.log(err);
        }
    },
}