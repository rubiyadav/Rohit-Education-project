
const router = require('express').Router();
const Attendence = require('../controllers/AttendenceController');

//post for free Courses
router.post('/Studenattendence', Attendence.AttendenceStudentpost);

router.post('/ViewAttendence/:id',Attendence.getAttendence)

router.patch('/editattendence/:id', Attendence.StudentAttendencePatch)

router.delete('/removeattendence/:id',Attendence.DeleteStudentAttendence)

module.exports = router;

