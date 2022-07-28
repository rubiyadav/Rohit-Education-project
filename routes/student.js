
const router = require('express').Router();
const studentpost = require('../controllers/student');
const { isAuthenticated } = require('../controllers/auth.controller')


//Images Upload
const app = require("express");
const path = require("path");
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

//post table
router.post('/post', upload.single("myField"), isAuthenticated, studentpost.studentpost);
//post table
// router.post('/post', upload.single("myField"), studentpost.studentpost);

//get All post
router.get('/get', isAuthenticated,studentpost.studentget);

//get byID
router.get('/getbyid/:id', studentpost.studentgetbyID);
//get By Auther

router.get('/getbyauther/:auther', studentpost.studentgetbyAuther);
//getBy category

router.get('/getbyidcategory/:category', studentpost.studentgetbyCategory);

//patch api
router.patch('/studentpatch/:id',studentpost.StudentPostPatch)

//Delete api
router.delete('/studentdelete/:id', studentpost.DeleteStudentpost)

//patch api for student likes count
router.patch('/studentlikecount/:id', studentpost.StudentPostLikeCountPatch)

//post for course
router.post('/coursepost',studentpost.Coursestudentpost)


//get for course
router.get('/courseget/:id', studentpost.getcourses)

//patch for course
router.patch('/coursepatch/:id', studentpost.StudentCoursePatch)

// Delete Courses
router.delete('/coursedelete/:id', studentpost.DeleteCourse)

//patch user overview
router.patch('/useroverview/:id', studentpost.UserOverviewPatch)

//Get UsersOverview
router.get('/getuseroverview/:id', studentpost.getUserOverView)

//post api for Student Exma
router.post('/poststudentexam', studentpost.studentpostExam)

//get for Student Exam
router.get('/getstudentexam/:id', studentpost.getStudentExam)

//patch for student Exam
router.patch('/patchstudentexam/:id', studentpost.StudentExampatch)

//Delete api
router.delete('/deletestudentexam/:id', studentpost.DeleteStudentExam)

//daily task post api
router.post('/poststudentdailytask', studentpost.studentDailyTaskPost)

//get the daily task
router.get('/getstudentdailytask/:id', studentpost.getStudenDailyTasks)

//update the task
router.patch('/patchstudentdailytask/:id', studentpost.StudentDailyTaskpatch)

//Delete the task
router.delete('/deletestuddailytask/:id', studentpost.DeleteStudentDailyTask)

//post api for daily task score
router.post('/postdailytaskscore', studentpost.studentDailyScoreTaskPost)

//get the score
router.get('/getdailytaskscore/:id', studentpost.getStudenDailyScoreTasks)

//update the daily score task
router.patch('/dailytaskscorepatch/:id', studentpost.StudentDailyScoreTaskpatch)

//Delete the score
router.delete('/deletedailytaskscore/:id',studentpost.DeleteStudentDailyScoreTask)

//post for Student class romm
router.post('/poststudentclassroom', studentpost.PostStudentClassRoom)

//get for Student class room
router.get('/getsdtudentclassroom/:id', studentpost.getStudenClassRoom)

//patch for student class romm
router.patch('/patchstudentclassroom/:id', studentpost.StudentClassRoompatch)

//Delete for Student Class room
router.delete('/deletestudentclassroom/:id',studentpost.DeleteStudentClassRoom)

//get  for search
router.get('/searchpost',studentpost.SearchStudentPost)

module.exports = router;


