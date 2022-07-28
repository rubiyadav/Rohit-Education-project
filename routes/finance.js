
const router = require('express').Router();
const finance = require('../controllers/finance');

//post for free Courses
router.post('/post', finance.financeCourseFreePost);

//get---
router.get('/getfreecourse/:id', finance.getFinanceFreeCourses)

//patch free Courses
router.patch('/patchfreecourse/:id', finance.financeFreeCoursestPatch)

//Delete Free Courses
router.delete('/deletefreecourse/:id', finance.DeletefinanceFreeCourses)

//getBy One Free courses
router.get('/getbyonefreeciurse/:userid',finance.getByOneFreeCourses)

module.exports = router;

