const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata } = require('../services/routes');

const marks = require('../models/Marks')

module.exports.Studentmarkspost = async (req, res) => {
  const data = await postdata(marks, req.body)
  res.status(200).json({
    message: 'Student Marks successfully',
    data: data
  })
}

//get 

module.exports.getmarks = async (req, res) => {
    const course = await getByOne(marks,{ id: req.params.id }) 
  res.status(200).json({
    message: 'Student Marks View Successfully',
    course:course
    })
};

//patch api for updates the course
module.exports.StudentMarksPatch = async (req, res) => {
  const data=await Patchdata(marks,{ _id: req.params.id },req.body)
  res.status(200).json({
    message: ' Student Marks Edit Successfully',
    data:data
  })
    
}

//Deleted Courses
module.exports.DeleteStudentMarks = async (req, res) => {
  const data=await Deletedata(marks,{ _id: req.params.id })
  res.status(200).json({
    message: 'Student marks Remove Successfully',
    data:data
  })    
};

