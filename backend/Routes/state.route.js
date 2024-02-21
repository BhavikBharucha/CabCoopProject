const express = require('express');
require('dotenv').config();

const router = express.Router();

const StateController = require("../controllers/State.Controller");
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

router.post("/Save_State_Details",[auth],StateController.saveStateDetails);
router.get("/ListState",StateController.ListAllStateDetails);
router.get("/ListStateBasedOnCountryId/:country_id",StateController.ListAllSatateBasedOnCountry);

module.exports = router;