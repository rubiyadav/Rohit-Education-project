const mongoose = require('mongoose');

const MedicalHealthSchema = new mongoose.Schema({

 UserId: {type: String},
 
Date: {type: String},

MedicalReportCard : {type: String},

UserName: {type: String}

}, 
 { timestamps: true});

module.exports = mongoose.model('MedicalHealth', MedicalHealthSchema);