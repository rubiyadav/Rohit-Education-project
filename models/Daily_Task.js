
const mongoose = require('mongoose');

const DailytaskSchema = new mongoose.Schema({
  Task_date: {type: String},
  Task_title: {type: String},
  TaskQuestionList:{type:[String]},
  TaskAnswerList:{type:[String]},
}, 
 { timestamps: true});

module.exports = mongoose.model('Dailytask', DailytaskSchema);
