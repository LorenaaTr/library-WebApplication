const mongoose = require('mongoose');
require("../Models/complaint.js");
const Complaint = mongoose.model("Complaints");

exports.createcomplaint= async (req, res) => {
  try {
    const { title, message, user } = req.body;

    if (!title || !message) {
      return res.status(400).send({ error: "All fields is required." });
    }

    const newComplaint = await Complaint.create({ title, message, user }); 
    res.status(201).json(newComplaint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getcomplaintById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: 'error', message: 'Invalid complaint ID' });
  }

  try {
    const complaint = await Complaint.findById(id);

    if (!complaint) {
      return res.status(404).json({ status: 'error', message: 'Complaint not found' });
    }

    res.status(200).json({ status: 'ok', data: complaint });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.updatecomplaintById = async (req, res) => {
  try {
    const complaintId = req.params.id;

    await Complaint.findByIdAndUpdate(complaintId);

    res.status(200).json({ status: 'ok', message: 'Complaint updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.deletecomplaintById = async (req, res) => {
    try {
      const complaintId = req.params.id;
  
      await Complaint.findByIdAndRemove(complaintId);
  
      res.status(200).json({ status: 'ok', message: 'Complaint deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};

exports.getAllcomplaints = async (req, res) => {
  try {
    const allComplaints = await Complaint.find({}).populate('user', 'username');
    res.send({ status: "ok", data: allComplaints });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}


