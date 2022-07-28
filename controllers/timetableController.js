const Time_Table = require('../models/Time_Table');
const moment = require("moment");
const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata } = require('../services/routes');


module.exports.TimeTablepost = async (req, res) => {
  let reqdata = req.body
  reqdata["time"] = moment().format("llll")
  const data = await postdata(Time_Table, reqdata)
  res.status(200).json({
    message: 'Time table Is Created  successfully',
    data: data
  })
         
}

//get by topic
module.exports.studentgetByTopic = async (req, res) => {
  const data = await getBy_withpage(Time_Table, { Topic: req.params.topic }, req.query.page)
  res.send(data)
};

//get By id
module.exports.TimeTablegetbyID = async (req, res) => {
  const data = await getBy_withpage(Time_Table, { _id: req.params.id }, req.query.page)
  if (!data[0]) {

    res.status(400).json({ message: "Enter the correct id", status: false });

  } else {
    res.status(200).json({
      message: 'Time Table Is created Successfully',
      data: data
    })

  }

};


//update the time table
module.exports.TimeTableUpdate= async (req, res) => {
  const data = await Patchdata(Time_Table, { _id: req.params.id }, req.body)
  if (!data[0]) {
    res.status(400).json({
      message: "Enter the correct id", status: false

    })
  } else {
    res.status(200).json({
      message: 'Time Table  Update Successfully',
      data: data

    })
    
  }
}

//Removed the Time Table

module.exports.DeleteTimeTable = async (req, res) => {
  const data = await Deletedata(Time_Table, { _id: req.params.id })
  if (!data[0]) {
    res.status(400).json({
      message: 'Enter the Correct ID', status: false
    })
  } else {
    res.status(200).json({
      message: 'Time Table Is Deleted Successfully'
    })
  }
}

//Get All
module.exports.GetAllTimeTable = async (req, res) => {
  const data = await getAll_withpage(Time_Table, req.query.page)
  if (!data) {
    res.status(400).json({
      message:'Something went wrong',status:false
    })
  } else {
    res.status(200).json({
      message: 'Time Table Views Successfully', status: true,
      data:data
    })
  }
};

