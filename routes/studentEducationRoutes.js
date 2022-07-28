const router = require('express').Router();

const studentEducation = require('../controllers/studentEducationController')

router.post('/studenteducation', studentEducation.StudentEducationPost)

router.get('/Viewstudenteducation/:id', studentEducation.getStudentEducation)

router.patch('/editstudenteducation/:id', studentEducation.StudenEducationPatch)

router.delete('/removestudenteducation/:id', studentEducation.DeleteStudentEducation)


module.exports = router;