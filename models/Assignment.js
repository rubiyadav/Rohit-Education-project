const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
                  
  AssignmentName: {type: String},
  
  SubjectName: {type: String},
  
  AssignmentDueDate : {type: String},
  
  AssignmentDesc: {type: String},
  
  ImageLInk: {type: String},
  
  VideoLInk: {type: String},
  
  TeacherID: {type: String},
  
}, 
                  
 { timestamps: true});

module.exports = mongoose.model('Assignment', AssignmentSchema);