const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb+srv://rinesa:12345@cluster1.4s4qdzs.mongodb.net/";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to Database");
}).catch(error => {
  console.error("Error connecting to database:", error.message);
});

const authuser = require("./Routes/authroutes");
const user = require("./Routes/userroutes");
const books = require("./Routes/bookroutes");

app.use('/authentification', authuser);
app.use('/user', user);
app.use('/book', books);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
