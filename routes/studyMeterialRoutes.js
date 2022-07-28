const router = require('express').Router();
// const CourseDetails = require('../controllers/CourseDetailsController')

const studyMeterial= require('../controllers/studyMeterialController')


router.post('/studymeterial', studyMeterial.studyMetrialpost)

router.get('/Viewstudymeterial/:id', studyMeterial.getStudyMeterial)

router.patch('/editstudymeterial/:id', studyMeterial.StudyMetrerialPatch)

router.delete('/removestudymeterial/:id', studyMeterial.RemoveStudymetereail)

module.exports = router;

