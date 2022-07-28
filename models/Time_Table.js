
const mongoose = require('mongoose');

const Time_TableSchema = new mongoose.Schema({
  date: {type: String},
  Subject: {type: String},
  Topic: { type: String },
  time: { type: String },
}, 
                  
 { timestamps: true});

module.exports = mongoose.model('time-Table', Time_TableSchema);
