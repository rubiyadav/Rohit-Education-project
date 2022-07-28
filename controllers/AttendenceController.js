
const Attendence = require('../models/Attendence');
const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata } = require('../services/routes');



// Apis


//postStudent

module.exports.AttendenceStudentpost = async (req, res) => {
  const data = await postdata(Attendence, req.body)
  res.status(200).json({
    message: 'Student Attendence successfully',
    data: data
  })
}


//get 

module.exports.getAttendence = async (req, res) => {
    const course = await getByOne(Attendence,{ id: req.params.id }) 
  res.status(200).json({
    message: 'Student View  Attendence ',
    course:course
    })
};

//patch api for updates the course
module.exports.StudentAttendencePatch = async (req, res) => {
  const data=await Patchdata(Attendence,{ _id: req.params.id },req.body)
  res.status(200).json({
    message: 'Student Attendence Edit Successfully',
    data:data
  })
    
  
}

//Deleted Courses
module.exports.DeleteStudentAttendence = async (req, res) => {
  const data=await Deletedata(Attendence,{ _id: req.params.id })
  res.status(200).json({
    message: 'Student Attendence Remove Successfully',
    data:data
  })    
};