
// const contact = require('../models/contact');
// const contact = require('../models/contact');
const CourseDetails = require('../models/CourseDetails');
const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata } = require('../services/routes');



// Apis


//postStudent

module.exports.StudentCoursedetails = async (req, res) => {
  const data = await postdata(CourseDetails, req.body)
  res.status(200).json({
    message: 'All courses successfully',
    data: data
  })
}


//get 

module.exports.ViewCourseDetails = async (req, res) => {
  const course = await getByOne(CourseDetails,{ id: req.params.id }) 
  res.status(200).json({
    message: 'Courses Details View Successfully',
    course:course
    })
};

//patch api for updates the course
module.exports.StudentCoursesPatch = async (req, res) => {
  const data = await Patchdata(CourseDetails,{ _id: req.params.id },req.body)
  res.status(200).json({
    message: ' Courses  Edit Successfully',
    data:data
  })
    
  
}

//Deleted Courses
module.exports.DeleteCourses = async (req, res) => {
  const data = await Deletedata(CourseDetails,{ _id: req.params.id })
  res.status(200).json({
    message: 'Courses Remove Successfully',
    data:data
  })    
};