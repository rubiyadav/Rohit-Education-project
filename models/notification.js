const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({

  notification_Title: {type: String},

  notification_Desc: {type: String},
  user_id:{type:String},
  notification_RedirectLink: { type: String },
  time: { type: String },
  

},
                  
 { timestamps: true});

module.exports = mongoose.model('notification', NotificationSchema);


