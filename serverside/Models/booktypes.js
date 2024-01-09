const mongoose = require('mongoose');

const booktypes = new mongoose.Schema({
    type: {
      type: String,
      required: true,
    },
    desc:{
      type:String,
      required:true,
    }
},
{
    collection:"Book Types"
});

mongoose.model('Book Types', booktypes);
