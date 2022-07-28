const router = require('express').Router();

const marks = require('../controllers/marksController')


router.post('/marksData', marks.Studentmarkspost);

router.post('/Viewmarks/:id', marks.getmarks)

router.patch('/editmarks/:id', marks.StudentMarksPatch)

router.delete('/removemarks/:id', marks.DeleteStudentMarks)


module.exports = router;