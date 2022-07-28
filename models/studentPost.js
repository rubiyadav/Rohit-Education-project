const mongoose = require('mongoose');

const studentpostSchema = new mongoose.Schema({

  post_Title: {type: String},

  postDesc: {type: String},

  images_Link: {type: String},

  Videos: {type: String},
  like_Count:{type:[String]},
  Auther: {type: String},

  category: { type: String },
  
  studentImage: {
    type: String,
    required: true,
  },
  
},
                  
 { timestamps: true});

module.exports = mongoose.model('studentpost', studentpostSchema);
