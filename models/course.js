const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema({

  course_Title: {type: String},

  course_Desc: {type: String},
  
  course_list:{type:[String]},

},
                  
 { timestamps: true});

module.exports = mongoose.model('course', CoursesSchema);


