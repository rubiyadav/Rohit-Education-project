const router = require('express').Router();
const admin = require('../controllers/admin')
const { isAuthenticated } = require('../controllers/auth.controller')

//notification post
router.post('/notificationpost', isAuthenticated,admin.Notficationpost);

//get notification ByID

router.get('/notificationget/:id',admin.getNotification);

//Delete api
router.delete('/notificationdelete/:id',admin.DeleteNotification)

//patch notification
router.patch('/noticationpatch/:id', admin.NotificationPatch)

//apply for post
router.post('/postapplyleave', admin.ApplyLeavePost)

//apply leave for get api
router.get('/getapplyleave/:id', admin.getApplyLeave)

//updates for apply leave application
router.patch('/patchapplyleave/:id',admin.ApplyLeavepatch)

//post api Assignemnt
router.post('/postassignment', admin.AssignmentPost)

//get-
router.get('/getAssignment/:id', admin.getAssignment)

//patch Assignment
router.patch('/assignmentpatch/:id', admin.Assignmentpatch)

//Delete Assigmnet
// router.delete('/deleteAssignment/:id', admin.DeleteAssignment)
router.delete('/deleteassignment/:id',admin.DeleteAssignment)

//Assignment Submssion post api
router.post('/postAssignmentsubmssion', admin.postAssignmentSubmssion)

//get api-
router.get('/getassingmentsubmission/:id', admin.getAssignmentSubmission)

//patch api
router.patch('/patchassingment/:id', admin.AssignmentSubmissionpatch)

//delete api
router.delete('/deleteassingment/:id', admin.DeleteAssignmentSubmission)

router.post('/login', admin.login);
router.post('/', admin.signUpUser);

module.exports = router;