const mongoose = require('mongoose');

const AssignmentSubmissionSchema = new mongoose.Schema({
 UserId: {type: String},
AssignmentId: {type: String},
AssignmentSubmissionDate : {type: String},
AssignmentFileLink: {type: String},
AssignmentStatus: {type: String},
}, 
 { timestamps: true});

module.exports = mongoose.model('AssignmentSubmission', AssignmentSubmissionSchema);
