const express = require('express');

const router = express.Router();

require('dotenv').config();
const Jwt = require("jsonwebtoken");
const jwtKey = process.env.MY_COOPTOKEN_KEY;

function auth(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
        //token = token.split(' ')[1];
        Jwt.verify(token, jwtKey, (error, valid) => {
            if (error) {
                res.send('please provide valid token');
            } else {
                next();
            }
        });
    } else {
        res.send('please add token with header');
    }
}

const CustomerAgentController = require('../controllers/CustomerAgent.Controller');
const customer_agent_documents = require('../middleware/customer_agent_documents');

router.post('/Customer_Agent_Registration',[customer_agent_documents.fields([
    {name: "gst_number",maxCount: 1},
    {name: "gumastadhara_number",maxCount: 1},
    {name: "company_pancard",maxCount: 1},
    {name: "owner_adharcard",maxCount: 1},
    {name: "owner_pancard",maxCount: 1},
])],CustomerAgentController.registerCustomerAgent);
router.get('/get_All_CustomerAgent_Details',CustomerAgentController.SelectAllCustomerAgent);

module.exports = router;