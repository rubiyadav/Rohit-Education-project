const mongoose = require('mongoose');

const ApplyLeaveSchema = new mongoose.Schema({

  User_Id: {type: String},
  LeaveType: {type: String},
  LeaveCause: {type: String},
  LeaveReason : {type: String},
  FromDate: {type: String},
  ToDate: {type: String},
  LeaveStatus: {type: String},
 
}, 
 { timestamps: true});

module.exports = mongoose.model('Leave', ApplyLeaveSchema);

