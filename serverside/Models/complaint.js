const mongoose = require('mongoose');
const userSchema = require('./user');

const complaint = new mongoose.Schema({
  user:[{type:userSchema}],
  title: {type: String, required: true },
  message: {type: String, required: true }
},
{
  collection:'Complaints'
});

mongoose.model('Complaints', complaint);
