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
    role:String,
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Books' }]
},
{
    collection:"Partners"
});
  
mongoose.model('Partners', partner);