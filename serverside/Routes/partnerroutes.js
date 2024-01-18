const express = require('express');
const router = express.Router();

const partnercontroller = require("../Controllers/partnercontroller");


router.post("/registerpartner", partnercontroller.register);
router.post("/loginpartner", partnercontroller.login);
router.post("/partnerdata", partnercontroller.partnerData);
router.get("/allpartners", partnercontroller.getAllPartners);
router.get("/allpartners/:partnerId", partnercontroller.getPartnerById);
router.delete("/deletepartner/:id", partnercontroller.deletePartnerById);
router.put("/updatepartner/:id", partnercontroller.updatePartnerById);



module.exports = router;