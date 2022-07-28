
const mongoose = require('mongoose');

const DailytaskScoreSchema = new mongoose.Schema({
  User_id: {type: String},
  Task_Date: {type: String},
  Task_Score:[{ Taskid: {type: String},
                    taskscore: {type: String}}]
}, 
  
 { timestamps: true});


module.exports = mongoose.model('DailytaskScore', DailytaskScoreSchema);
