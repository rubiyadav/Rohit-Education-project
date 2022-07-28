const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
                  
  SubjectName: {type: String},
  
  ClassStartTiming : {type: String},
  
  ClassEndTiming : {type: String},
  
  SubjectCategory: {type: String},
  
 SubjectDesc : {type: String},
 
 Studymaterial : {type: String},
 
  SubjectLink: {type: String},
  
  SubjectTeacher: {type: String},
 
}, 
 { timestamps: true});

module.exports = mongoose.model('Classroom', ClassroomSchema);

