const mongoose = require('mongoose');

const student_post_watch_dataSchema = new mongoose.Schema({

  User_ID: {type: String},
  Post_ID: {type: String},
  Post_current_status: {type: String},
  LikedPost: {type: String},


  
},
                  
 { timestamps: true});

module.exports = mongoose.model('student_post_data', student_post_watch_dataSchema);
