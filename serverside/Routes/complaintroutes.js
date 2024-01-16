const express = require('express');
const router = express.Router();

const complaintcontroller = require('../Controllers/complaintcontroller');

router.post('/addcomplaint', complaintcontroller.createcomplaint); 
router.get('/getcomplaints', complaintcontroller.getAllcomplaints);

module.exports = router;