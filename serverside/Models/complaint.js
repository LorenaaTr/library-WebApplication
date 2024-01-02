const mongoose = require('mongoose');

const complaint = new mongoose.Schema({
  title: {type: String, required: true },
  message: {type: String, required: true }
},
{
  collection:'Complaints'
});

mongoose.model('Complaints', complaint);
