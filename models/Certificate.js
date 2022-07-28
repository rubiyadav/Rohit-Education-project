const mongoose = require('mongoose');

const CeritficateSchema = new mongoose.Schema({

 UserId: {type: String},
 
Date: {type: String},

Subject : {type: String},

CertificateLink: {type: String},

Postion: {type: String},
CertificateImages:{type:String}

}, 
 { timestamps: true});

module.exports = mongoose.model('Ceritficate', CeritficateSchema);
