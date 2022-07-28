const mongoose = require('mongoose');

const StudentContactSchema = new mongoose.Schema({
 UserId: {type: String},
 
mobile: {type: Number},

Email : {type: String},

AadharNumber: {type: String},

PermentAdd: {type: String},

City: {type: String},

FatherName: {type: String},

FatherContact: {type: String},

MotherName: {type: String},

MotherContact: {type: String},

}, 
 { timestamps: true});

module.exports = mongoose.model('StudentContact', StudentContactSchema);