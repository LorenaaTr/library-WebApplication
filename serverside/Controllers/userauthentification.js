const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoose = require('mongoose');
require('../Models/user');
const User = mongoose.model("UserInfo");

exports.register = async(req, res) =>{
    const{name, surname, email, city, birthday, isStudent, username, password, confirmpassword, role} = req.body;
  
    if (!name || !surname || !email || !city || !birthday || !isStudent || !username || !password || !confirmpassword) {
      return res.status(400).send({ error: "All fields are required." });
    }
  
    if (password !== confirmpassword) {
      return res.status(400).send({ error: "Passwords do not match." });
    }
  
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
        isStudent,
        username,
        password: encryptedPassword,
        role: isAdmin ? 'admin' : 'user',
      });

      res.send({status:"ok"});
    }catch(error){
      res.send({status:"error"})
    }
};

exports.login = async (req, res) =>{
    const {username, password} = req.body;
  
    const user = await User.findOne({username});
    if(!user){
      return res.json({error:"User not found"});
    }
    if(await bcrypt.compare(password, user.password)){
      const token = jwt.sign({ username: user.username }, JWT_SECRET, {
        expiresIn: '30m', 
      });
      if(res.status(201)){
        return res.json({status:"ok", data:token});
      }else{
        return res.json({error:"error"});
      }
    }
    res.json({status:"error", error:"Invalid password"});
}