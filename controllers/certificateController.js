const Certificate = require('../models/Certificate');
const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata } = require('../services/routes');


module.exports.ContactStudentpost = async (req, res) => {
                  let val = req.body
                  val['CertificateImages'] = req.file.originalname
  const data = await postdata(Certificate,val)
  if(!data){
                    res.status(400).json({
                                    message:'Something went wrong',status:false
                  })
  } else {
                    res.status(200).json({
                                      message: 'Student Certification Is created', status: true,
                                      data:data
                  
                    })
  }
}



//Get Api--

module.exports.getCertificateByLink = async (req, res) => {
                  const course = await getByOne(Certificate, {CertificateLink: req.params.CertificateLink})
                  if (!course) {
                                    res.status(400).json({
                                      message:'Enter the Correct Id',status:false
                    })
                  } else {
                                    res.status(200).json({
                                                      message: 'Certificate Is Created', status,
                                                      course:course
                                    })
  }
  res.send(course)
};


