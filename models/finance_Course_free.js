const mongoose = require('mongoose');

const financeCourseFeeSchema = new mongoose.Schema({

  User_Id: {type: String},
  CourseID: {type: String},
  CourseName : {type: String},
  CourseStartDate : {type: String},
  BillingDate : {type: String},
  PaidDate: {type: String},
  Amount : {type: String},
  BillingStatus: {type: String},

 
}, 
 { timestamps: true});

module.exports = mongoose.model('CourseFee', financeCourseFeeSchema);
