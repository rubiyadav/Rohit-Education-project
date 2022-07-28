const router = require('express').Router();
const CourseDetails = require('../controllers/CourseDetailsController')


router.post('/coursedetailspost', CourseDetails.StudentCoursedetails);

router.post('/ViewcorseDetails/:id', CourseDetails.ViewCourseDetails)

router.put('/editcourse/:id', CourseDetails.StudentCoursesPatch)

router.delete('/removecourse/:id', CourseDetails.DeleteCourses)


module.exports = router;
