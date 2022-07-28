const router = require('express').Router();

router.use('/auth', require('./auth.route'));

router.use('/studentpost', require('./student'));

//admin
router.use('/admin', require('./admin'))

//finance
router.use('/finance', require('./finance'))

router.use('/Attendence', require('./AttendenceRoutes'))

router.use('/Contact', require('./contactRoutes'))

router.use('/CourseDetails', require('./courseRoutes'))

router.use('/studyMeterial', require('./studyMeterialRoutes'))

router.use('/marks', require('./marksRoutes'))

router.use('/studentEducation', require('./studentEducationRoutes'))
router.use('/timetable', require('./timetableRoutes'))

router.use('/certification',require('./certificationRoutes'))





module.exports = router;
