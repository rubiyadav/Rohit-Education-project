const mongoose = require('mongoose');

const AttendenceSchema = new mongoose.Schema({

 UserId: {type: String},
 
Date: {type: String},

Subject : {type: String},

TotalPresent: {type: String},

TotalSession: {type: String},

TotalAttendance: {type: String},

}, 
 { timestamps: true});

module.exports = mongoose.model('Attendence', AttendenceSchema);