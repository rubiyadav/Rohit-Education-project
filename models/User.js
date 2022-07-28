const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  first_Name: { type: String },

  last_Name: { type: String },

  Email: { type: String },

  mobile_Number: { type: String },

  country: { type: String },

  profileImg: { type: String, default: '' },

  permentAddress: { type: String, default: '' },

  residencyAddress: { type: String, default: '' },

  created: { type: String, default: new Date().toISOString() },

  password: { type: String, required: true },

  active: { type: Boolean, default: false },

  otp: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
