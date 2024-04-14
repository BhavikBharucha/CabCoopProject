const express = require('express');

const router = express.Router();

const Customer = require("../controllers/Customer.Controller");

router.post("/CustomerRegistration",Customer.customerRegistration);
router.get("/ListCustomers",Customer.listAllCustomerDetails);

module.exports = router;