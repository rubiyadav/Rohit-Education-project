const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata } = require('../services/routes');

const Study_Material = require('../models/Study_Material')
//post api student metrial

module.exports.studyMetrialpost = async (req, res) => {
  const data = await postdata(Study_Material, req.body)
  res.status(200).json({
    message: 'Study Meterial Is found  successfully',
    data: data
  })
}


module.exports.getStudyMeterial = async (req, res) => {
  const course = await getByOne(Study_Material, { id: req.params.id },req.body)
  console.log(course)
  res.status(200).json({
    message: 'Study meterial is found',
    course: course
  })
};

//patch api for updates the course
module.exports.StudyMetrerialPatch = async (req, res) => {
  const data = await Patchdata(Study_Material, { _id: req.params.id }, req.body)
  res.status(200).json({
    message: ' Study meterial Edit Successfully',
    data: data
  })

}

//Deleted Courses
module.exports.RemoveStudymetereail = async (req, res) => {
  const data = await Deletedata(Study_Material, { _id: req.params.id })
  res.status(200).json({
    message: 'Study Meterial Remove Successfully',
    data: data
  })
};