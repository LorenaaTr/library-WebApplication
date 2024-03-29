const mongoose = require('mongoose');
const booksSchema = require('./books'); 

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  birthday: { type: String, required: true },
  username: { type: String, required: true },
  password: String,
  role: String,
  books: [{ type: booksSchema}] 
}, {
  collection: "Users"
});

mongoose.model('Users', userSchema);
