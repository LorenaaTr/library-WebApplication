const mongoose = require('mongoose');
const Bookschema = require('./books');
const partner =  new mongoose.Schema({
    username:{type:String, required:true},
    name: {type: String, required: true },
    ceo: {type: String, required: true },
    city: {type: String, required: true },
    state: {type: String, required: true },
    street:{type: String, required: true},
    zipcode:{type:Number, required: true},
    password:String,
    image: {type: String,
        default: "https://firebasestorage.googleapis.com/v0/b/shelfshare-3835c.appspot.com/o/1705068521443-cover.jpg?alt=media&token=ee5cf97b-8de2-4c5c-9dc4-eb6e1df08565",
      },
    role:String,
    books: [{ type: {Bookschema}}]
},
{
    collection:"Partners"
});
  
mongoose.model('Partners', partner);