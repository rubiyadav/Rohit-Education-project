
const contact = require('../models/contact');
const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata } = require('../services/routes');


// Apis

//postStudent

module.exports.ContactStudentpost = async (req, res) => {
  const data = await postdata(contact, req.body)
  res.status(200).json({
    message: 'Contact profiles successfully',
    data: data
  })
}

//get 

module.exports.getContact = async (req, res) => {
    const course = await getByOne(contact,{ id: req.params.id }) 
  res.status(200).json({
    message: 'Contact View Successfully',
    course:course
    })
};

//patch api for updates the course
module.exports.StudentContactPatch = async (req, res) => {
  const data=await Patchdata(contact,{ _id: req.params.id },req.body)
  res.status(200).json({
    message: ' Contact  profiles Edit Successfully',
    data:data
  })
    
}

//Deleted Courses
module.exports.DeleteStudentContactprofiles = async (req, res) => {
  const data=await Deletedata(contact,{ _id: req.params.id })
  res.status(200).json({
    message: 'Contact Remove Successfully',
    data:data
  })    
};

