const express = require('express');
const router = express.Router();

const complaintcontroller = require('../Controllers/complaintcontroller');

router.post('/addComplaint', complaintcontroller.createcomplaint); 
router.get('/getcomplaints', complaintcontroller.getAllcomplaints);
router.get('/getcomplaintbyid/:id', complaintcontroller.getcomplaintById);
router.put('/updatecomplaint/:id', complaintcontroller.updatecomplaintById);
router.delete('/delecomplaint/:id',complaintcontroller.deletecomplaintById);

module.exports = router;