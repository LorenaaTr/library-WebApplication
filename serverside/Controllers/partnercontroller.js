const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
require('../Models/partner');
const Partner = mongoose.model("Partners");

exports.register = async(req, res) =>{
    const{username, name, ceo, city, state, street, zipcode, password, confirmpassword, image,role} = req.body;
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
        image,
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
  const role = partner && partner.role;
  if(!partner){
    return res.json({error:"Partner not found"});
  }
  if(await bcrypt.compare(password, partner.password)){
    const token = jwt.sign({ username: partner.username }, JWT_SECRET, {
      expiresIn: '50m', 
    });
    if(res.status(201)){
      return res.json({status:"ok", data:token, role});
    }else{
      return res.json({error:"error"});
    }
  }
  res.json({status:"error", error:"Invalid password"});
};

exports.partnerData = async (req, res) => {
  const { token } = req.body;

  try {
    const partner = jwt.verify(token, JWT_SECRET);

    if (Date.now() >= partner.exp * 1000) {
      return res.status(401).json({ status: 'error', data: 'token expired' });
    }

    const partnerusername = partner.username;
    console.log('User Username:', partnerusername);

    try {
      const data = await Partner.findOne({ username: partnerusername });

      if (!data) {
        return res.status(404).json({ status: 'error', data: 'user not found' });
      }

      const partnerData = {
        _id: data._id,
        username: data.username,
        name: data.name,
        ceo: data.ceo,
        city: data.city,
        state: data.state,
        street: data.street,
        zipcode: data.zipcode,
        image: data.image
      };

      res.status(200).json({ status: 'ok', data: partnerData });
    } catch (error) {
      console.error('Error Fetching User Data:', error.message);
      res.status(500).json({ status: 'error', data: error.message });
    }
  } catch (error) {
    console.error('Error Verifying Token:', error.message);
    res.status(401).json({ status: 'error', data: 'invalid token' });
  }
};

exports.getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.find({});

    res.status(200).json({ status: 'ok', data: partners });
  } catch (error) {
    console.error('Error Fetching Partners:', error.message);
    res.status(500).json({ status: 'error', data: error.message });
  }
};

exports.deletePartnerById = async (req, res) => {
  const partnerId = req.params.id;

  try {
    const partner = await Partner.findById(partnerId);

    if (!partner) {
      return res.status(404).json({ status: 'error', message: 'Partner not found' });
    }

    await Partner.findByIdAndDelete(partnerId);

    return res.status(200).json({ status: 'ok', message: 'Partner deleted successfully' });
  } catch (error) {
    console.error('Error deleting partner:', error.message);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getPartnerById = async (req, res) => {
 

  try {
    const partnerId = req.params.partnerId;
    const partner = await Partner.findById(partnerId);

    if (!partner) {
      return res.status(404).json({
        status: 'error',
        message: 'Partner not found'
      });
    }

    res.status(200).json({
      status: 'ok',
      data: partner
    });
  } catch (error) {
    console.error('Error Fetching Partner by ID:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};


exports.updatePartnerById = async (req, res) => {
  try {
    const partnerId = req.params.id;
    const {
      username,
      name,
      ceo,
      city,
      state,
      street,
      zipcode,
      password,
      image,
    } = req.body;

    // Hash the password if provided
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

    const updatedPartner = await Partner.findByIdAndUpdate(
      partnerId,
      {
        username,
        name,
        ceo,
        city,
        state,
        street,
        zipcode,
        password: hashedPassword,
        image,
      },
      { new: true }
    );

    if (!updatedPartner) {
      return res.status(404).json({
        status: 'error',
        message: 'Partner not found',
      });
    }

    res.status(200).json({
      status: 'ok',
      data: updatedPartner,
    });
  } catch (error) {
    console.error('Error updating partner:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

exports.getPartnersCount = async(req, res) =>{
  try {
    const partners = await mongoose.model('Partners').find();
    res.json(partners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

