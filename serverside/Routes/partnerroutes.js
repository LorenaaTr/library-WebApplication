const express = require('express');
const router = express.Router();

const partnercontroller = require("../Controllers/partnercontroller");


router.post("/registerpartner", partnercontroller.register);
router.post("/loginpartner", partnercontroller.login);

module.exports = router;