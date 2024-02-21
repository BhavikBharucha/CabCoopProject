const express = require("express");

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

const CityController = require("../controllers/City.Controller");

router.post("/Save_City_Details",[auth],CityController.saveCityDetails);
router.get("/ListCity",CityController.ListAllCityDetails);
router.get("/ListAllCityBasedOnState/:state_id",CityController.ListAllCityBasedOnState);

module.exports = router;