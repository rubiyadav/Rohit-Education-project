const mongoose = require('mongoose');

const Student_ExmaSchema = new mongoose.Schema({

  Class: {type: String},

  Subject: {type: String},
  
  Date:{type:[String]},
  day:{type:String},
  time:{type:String},
  exam_Link:{type:String}

},
                  
 { timestamps: true});

module.exports = mongoose.model('studentexam', Student_ExmaSchema);

