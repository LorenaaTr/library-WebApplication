const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
require('../Models/partner');
const Partner = mongoose.model("Partners");

exports.register = async(req, res) =>{
    const{username, name, ceo, city, state, street, zipcode, password, confirmpassword, role} = req.body;
    // if (!.includes('@')) {
    //     return res.status(400).send({ error: "Invalid email. Only @ emails are allowed." });
    // }

    const setusername = `${name.toLowerCase().replace(/\s/g, '')}bookstore`;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
      const oldPartner = await Partner.findOne({name});
  
      if(oldPartner){
        return res.send({error:"Partner exists."})
      }

      await Partner.create({
        username:setusername,
        name,
        ceo,
        city,
        state,
        street,
        zipcode,
        password: encryptedPassword,
        role: "Partner" 
      });

      res.send({status:"ok"});
    }catch(error){
      res.send({status:"error"})
    }
};


exports.login =  async (req, res) => {
  const {username, password} = req.body;

  const partner = await Partner.findOne({username});
  if(!partner){
    return res.json({error:"Partner not found"});
  }
  if(await bcrypt.compare(password, partner.password)){
    const token = jwt.sign({ username: partner.username }, JWT_SECRET, {
      expiresIn: '50m', 
    });
    if(res.status(201)){
      return res.json({status:"ok", data:token});
    }else{
      return res.json({error:"error"});
    }
  }
  res.json({status:"error", error:"Invalid password"});
};