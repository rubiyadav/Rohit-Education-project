const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  user_Name: {
    type: String,
    required: false,
  },
  mobile_Number: {
    type: String,
    required: true,

  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
    required: true,
  },

  Name: {
    type: String,
    required: false
  },


});

module.exports = mongoose.model('admin', AdminSchema);

