const express = require('express');

const router = express.Router();

const LoginController = require("../controllers/Login.Controller");

router.post("/login",LoginController.login);
router.patch("/updateUserStatusToActive/:id",LoginController.updateFlagToActive);
router.patch("/updateUserStatusToDeactive/:id",LoginController.updateFlagToDeactive);

module.exports = router;