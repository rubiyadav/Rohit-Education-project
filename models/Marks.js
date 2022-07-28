const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({

  course_Namec: {type: String},
  user_id:{type:String},
  Course_id: { type: String },
  Semister: { type: String },
  date_of_Publish: { type: String },  
  Subject_Data:{
      SubjectName:{Type: String},
      MaxMarks:{Type: Number},
      Marks:{Type: Number},
  }

},
                  
 { timestamps: true});

module.exports = mongoose.model('marks', MarksSchema);

