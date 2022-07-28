const router = require('express').Router();
const { isAuthenticated } = require('../controllers/auth.controller')

const timetable = require('../controllers/timetableController')
router.post('/examtimetable', isAuthenticated , timetable.TimeTablepost)

router.get('/viewtimetable/:topic', isAuthenticated , timetable.studentgetByTopic)

router.get('/timetablegetbyid/:id', isAuthenticated , timetable.TimeTablegetbyID)

router.patch('/timetableedit/:id', timetable.TimeTableUpdate)

router.delete('/removetimetable/:id', timetable.DeleteTimeTable)
router.get('/allviews',timetable.GetAllTimeTable)

module.exports = router;



