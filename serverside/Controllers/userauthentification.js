const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
require('../Models/user');
const User = mongoose.model("Users");

exports.register = async(req, res) =>{
    const{name, surname, email, city, birthday, username, password, confirmpassword, role} = req.body;
  
    const isAdmin = email.includes('rinesashelfshare') || email.includes('lorenashelfshare') || email.includes('bleonitshelfshare');

    if (!email.includes('@')) {
        return res.status(400).send({ error: "Invalid email. Only @ emails are allowed." });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
      const oldUser = await User.findOne({username});
  
      if(oldUser){
        return res.send({error:"User exists."})
      }

      await User.create({
        name,
        surname,
        email,
        city,
        birthday,
        username,
        password: encryptedPassword,
        role: isAdmin ? "Admin" : "User",
      });

      res.send({status:"ok"});
    }catch(error){
      res.send({status:"error"})
    }
};


exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ status: "error", error: "User not found" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { username: user.username, role: user.role }, // Include the user role
        JWT_SECRET,
        { expiresIn: '40m' }
      );

      // Return the token and user role in the response
      return res.json({ status: "ok", data: { token, role: user.role } });
    }

    // If the password is invalid
    return res.json({ status: "error", error: "Invalid password" });
  } catch (error) {
    console.error('Error:', error);
    return res.json({ status: "error", error: "Internal server error" });
  }
};
