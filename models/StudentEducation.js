const mongoose = require('mongoose');

const StudentEducationSchema = new mongoose.Schema({

 UserId: {type: String},
 
Education: {type: String},

SchoolName : {type: String},

Board: {type: String},

StateName: {type: String},

CityName : {type: String},

MarksScored: {type: String},

Grade: {type: String},

}, 
 { timestamps: true});

module.exports = mongoose.model('StudentEducation', StudentEducationSchema);