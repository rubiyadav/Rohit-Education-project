const mongoose = require('mongoose');

const StudentCourseDetailSchema = new mongoose.Schema({
                  
 UserId: {type: String},
 
 UserUniqueId: { type: String },

Course:  {type: String},

Batch: {type: String},

YearOfCompletion: {type: String},

Gender: {type: String},

DateOfBirth: {type: String},

Religion: {type: String},

BloodGroup: {type: String},

Category: {type: String},

}, 
 { timestamps: true});

module.exports = mongoose.model('StudentCourseDetail', StudentCourseDetailSchema);