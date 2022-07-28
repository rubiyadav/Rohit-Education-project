const { getByOne, postdata, Deletedata } = require('../services/routes');

const StudentEducation = require('../models/StudentEducation');

module.exports.StudentEducationPost = async (req, res) => {
  const data = await postdata(StudentEducation, req.body)
  res.status(200).json({
    message: 'Student Education  successfully',
    data: data
  })
         
  }

  //Get api--

module.exports.getStudentEducation = async (req, res) => {
    const course = await getByOne(StudentEducation,{ id: req.params.id }) 
  res.status(200).json({message:"Student Education is created",
  
    course:course
    })
};

//patch api for updates the course
module.exports.StudenEducationPatch = async (req, res) => {
  const data=await Patchdata(StudentEducation, { _id: req.params.id }, req.body)
  res.status(200).json({
    message: ' Student Education Edit Successfully',
    data:data
  })
    
}

//Deleted Courses
module.exports.DeleteStudentEducation = async (req, res) => {
  const data=await Deletedata(StudentEducation,{ _id: req.params.id })
  res.status(200).json({
    message: 'Student Education Remove Successfully',
    data:data
  })    
};

