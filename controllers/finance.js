const finance_Course_free = require('../models/finance_Course_free');
const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata } = require('../services/routes');


//post api for CourseFree

module.exports.financeCourseFreePost= async (req, res) => {
  const data= await postdata(finance_Course_free,req.body)
  res.send(data)
};


//Get api for CourseFree
module.exports.getFinanceFreeCourses = async (req, res) => {
const data = await getByOne(finance_Course_free, {_id: req.params.id })
  res.send(data)
};


//patch for FreeCourse
module.exports.financeFreeCoursestPatch = async (req, res) => {
  const data=await Patchdata(finance_Course_free,{ _id: req.params.id },req.body)
  res.send(data)
 
}
//Delete for free Courses
module.exports.DeletefinanceFreeCourses = async (req, res) => {
  const data=await Deletedata(finance_Course_free,{ _id: req.params.id })
  res.send(data)
};


//get byONE For Free courses
module.exports.getByOneFreeCourses = async (req, res) => {
  const course = await getBy_withpage(finance_Course_free, { userid: req.params.userid })
  res.send(course)
};