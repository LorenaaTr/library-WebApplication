const mongoose = require('mongoose');
require('../Models/user');
const User = mongoose.model("Users");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const bcrypt = require('bcryptjs');

exports.userData = async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);

    if (Date.now() >= user.exp * 1000) {
      return res.status(401).json({ status: 'error', data: 'token expired' });
    }

    const userusername = user.username;
    console.log('User Username:', userusername);

    try {
      const data = await User.findOne({ username: userusername });

      if (!data) {
        return res.status(404).json({ status: 'error', data: 'user not found' });
      }

      const userData = {
        _id: data._id,
        username: data.username,
        name: data.name,
        surname: data.surname,
        birthday: data.birthday,
        email: data.email,
        city: data.city,
        role: data.role,
      };

      res.status(200).json({ status: 'ok', data: userData });
    } catch (error) {
      console.error('Error Fetching User Data:', error.message);
      res.status(500).json({ status: 'error', data: error.message });
    }
  } catch (error) {
    console.error('Error Verifying Token:', error.message);
    res.status(401).json({ status: 'error', data: 'invalid token' });
  }
};

exports.updatePasswordById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ error: 'Password field is required.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { password : hashedPassword},
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateUsernameById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newUsername } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }


    if (!newUsername) {
      return res.status(400).json({ error: 'Username field is required.' });
    }


    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username: newUsername },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateNameById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newName } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }


    if (!newName) {
      return res.status(400).json({ error: 'Name field is required.' });
    }


    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name: newName },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSurnameById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newSurname } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }


    if (!newSurname) {
      return res.status(400).json({ error: 'Surname field is required.' });
    }


    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { surname: newSurname },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEmailById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newEmail } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (!newEmail.includes('@')) {
      return res.status(400).send({ error: "Invalid email. Only @ emails are allowed." });
    }

    if (!newEmail) {
      return res.status(400).json({ error: 'Email field is required.' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { email: newEmail },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCityById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newCity } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (!newCity) {
      return res.status(400).json({ error: 'City field is required.' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { city: newCity },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBirthdayById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newBirthday } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (!newBirthday) {
      return res.status(400).json({ error: 'Password field is required.' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { birthday: newBirthday },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



