const mongoose = require('mongoose');
require('../Models/user');
const User = mongoose.model("Users");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

exports.userData = async (req, res) => {
    const { token } = req.body;
  
    try {
      const user = jwt.verify(token, JWT_SECRET);
  
      if (Date.now() >= user.exp * 1000) {
        return res.status(401).json({ status: "error", data: "token expired" });
      }
  
      const userusername = user.username;
  
      User.findOne({ username: userusername })
        .then((data) => {
          const userData = {
            username: data.username,
            password: data.password,
            name: data.name,
            surname: data.surname,
            birthday: data.birthday,
            email: data.email,
            city: data.city,
            role:data.role
          };
  
          res.status(200).json({ status: "ok", data: userData });
        })
        .catch((error) => {
          res.status(500).json({ status: "error", data: error });
        });
    } catch (error) {
      res.status(401).json({ status: "error", data: "invalid token" });
    }
};