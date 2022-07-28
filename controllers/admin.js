const Apply_Leave = require('../models/Apply_Leave');
const Assignment = require('../models/Assignment');
const Assignment_Submission = require('../models/Assignment_Submission');
const Notification = require('../models/notification');
const moment = require("moment");
// const router = require('../routes/admin');
const Admin = require('../models/Admin')
const jwt = require("jsonwebtoken");
const JWTkey = 'rubi'
const bcrypt = require("bcrypt")
const authToken = process.env.TWILIO_AUTH_TOKEN;
const { encrypt, compare } = require('../services/crypto');
const { getByOne, Patchdata, postdata, Deletedata } = require('../services/routes');



//SignUP
module.exports.signUpUser = async (req, res) => {
  const { user_Name, mobile_Number, password } = req.body;

  // Check if user already exist
  const Existing = await Admin.findOne({ mobile_Number })
  if (Existing) {
    return res.send('Already existing');
  }
  encryptedPassword = await bcrypt.hash(password, 10);


  // create new user
  const newUser = await createUser(user_Name, mobile_Number, password);
  if (!newUser[0]) {
    return res.status(400).send({
      message: 'Unable to create new user',
    });
  }
  res.send(newUser);
};

const createUser = async (user_Name, mobile_Number, password) => {
  const hashedPassword = await encrypt(password);
  const otpGenerated = Math.floor(1000 + Math.random() * 90000)
  const newUser = await Admin.create({
    user_Name, mobile_Number,
    password: hashedPassword,
    otp: otpGenerated,
  });
  if (!newUser) {
    return [false, 'Unable to sign you up'];
  }
  try {
    // sendSMS(`+91${mobile_Number}`, otpGenerated)

    return [true, newUser];
  } catch (error) {
    return [false, 'Unable to sign up, Please try again later', error];
  }
};


//login ------
module.exports.login = async (req, res) => {

  try {
    const { mobile_Number, password } = req.body;

    if (!(mobile_Number && password)) {
      res.status(400).send("All input is required");
    }

    const user = await Admin.findOne({ mobile_Number });

    if (!user) res.status(400).json({
      message: 'This Number is not registered'

    })

    if (user && (await compare(password, user.password))) {
      jwt.sign({ user_id: user._id }, JWTkey, { expiresIn: '3h' }, (err, token) => {
        if (err) res.status(400).send("Invalid Credentials");
        res.send({ user, token });
      }
      );

    }

  } catch (err) {
    console.log(err);
  }

};


//post api for notification

module.exports.Notficationpost= async (req, res) => {
    let {notification_Title, notification_Desc, user_id,notification_RedirectLink} = req.body;
  
    try {
      if (!(notification_Title && notification_Desc && user_id && notification_RedirectLink)) {
        res.json({ message: "All field are required", status: false });
      } else {
        const notification = await Notification.create({
          notification_Desc,
          notification_Title,
          user_id,
          notification_RedirectLink,
          time: moment().format("llll"),
         
        });
  
        if (!notification) {
          res.json({ message: "notification pos is not created", status: false });
        } else {
          res.json({
            message: "notification is successfully",
            data: notification,
            status: true,
          });
        }
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };

//get for notification

module.exports.getNotification = async (req, res) => {
  try {
    const  notification = await Notification.findOne({ id: req.params.id });
    if (! notification) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.json({
        message: "Notification is found",
        data: notification,
        status: true
      });

    }
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};

//patch api 
module.exports.NotificationPatch = async (req, res, next) => {
  let { notification_Title, notification_Desc, user_id, notification_RedirectLink } = req.body;
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id },
      {
         notification_Desc,
          notification_Title,
          user_id,
          notification_RedirectLink
      },
      { new: true }
    );
    if (! notification) {
      res.json({ message: "Notification not updated", status: false });
    } else {
      res.json({
        message: "Notification  updated successfully",
        status: true,
         notification: notification,
      });
    }
  } catch (error) { }
}

//Delete notification
module.exports.DeleteNotification = async (req, res) => {
  try {
    const notification = await Notification .findOneAndDelete({ id: req.params.id });
    if (!notification) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.send({ message: "notification is deleted successfully", status: true });
    }
  } catch (error) {
    res.send({ message: error.message, status: false });
  }
};

//Apply for leave post api

module.exports.ApplyLeavePost = async (req, res) => {
  const data = await postdata(Apply_Leave, req.body)
  res.send(data)
};

//get for apply leave
module.exports.getApplyLeave = async (req, res) => {
  const data = await getByOne(Apply_Leave, { _id: req.params.id })
  res.send(data)
};

//patch for apply leave
module.exports.ApplyLeavepatch = async (req, res) => {
  const data = await Patchdata(Apply_Leave, { _id: req.params.id }, req.body)
  res.send(data)
}
//post for Assignment
module.exports.AssignmentPost = async (req, res) => {
  const data = await postdata(Assignment, req.body)
  res.send(data)
};

//get for assignment
module.exports.getAssignment = async (req, res) => {
  const data = await getByOne(Assignment, { _id: req.params.id })
  res.send(data)
};

//patch for Assignmnet
module.exports.Assignmentpatch = async (req, res) => {
  const data = await Patchdata(Assignment, { _id: req.params.id }, req.body)
  res.send(data)
}

//Delete api for assignment 
module.exports.DeleteAssignment = async (req, res) => {
  const data = await Deletedata(Assignment, { _id: req.params.id })
  res.send(data)
};


//post api for Assignment Submssion
module.exports.postAssignmentSubmssion = async (req, res) => {
  const data = await postdata(Assignment_Submission, req.body)
  res.send(data)
}

//get api for Assingment Submission
module.exports.getAssignmentSubmission = async (req, res) => {
  const data = await getByOne(Assignment_Submission, { _id: req.params.id })
  res.send(data)
};

//patch api
module.exports.AssignmentSubmissionpatch = async (req, res) => {
  const data = await Patchdata(Assignment_Submission, { _id: req.params.id }, req.body)
  res.status(200).json({
    message: 'Assingment Submission Is Updated  Successfully',
    data:data
  }) 
}

//delete api--
module.exports.DeleteAssignmentSubmission = async (req, res) => {
  const data = await Deletedata(Assignment_Submission, { _id: req.params.id })
  res.status(200).json({
    message: 'Assignment Submission Is created Successfully',
    data:data
  })  
};



