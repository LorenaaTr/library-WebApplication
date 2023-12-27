const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: {type: String, required: true },
  surname: {type: String, required: true },
  email: {type: String, required: true },
  city: {type: String, required: true },
  birthday:{type: Date, required: true},
  isStudent:{type: Boolean, required: true},
  username:{type:String, required: true},
  password:String,
  role:String,
},
{
  collection:"UserInfo"
});

mongoose.model('UserInfo', user);
