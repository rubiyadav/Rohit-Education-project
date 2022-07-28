const mongoose = require('mongoose');

const StudyMaterialSchema = new mongoose.Schema({
                  
  SubjectName: {type: String},
  
 SubjectDesc : {type: String},
 
 Studymaterial : {type: String},
 
  Class: {type: String},
  
  SubjectTeacher: {type: String},
 
}, 
 { timestamps: true});

module.exports = mongoose.model('StudyMaterial', StudyMaterialSchema);

