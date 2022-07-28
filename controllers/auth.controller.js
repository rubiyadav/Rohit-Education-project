const { encrypt, compare } = require('../services/crypto');
const { sendMail } = require('../services/MAIL');
const User = require('../models/User');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const JWTkey = 'rubi'
const auht = require("../controllers/middlewares/auth");
const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata} = require('../services/routes');
const from = "+19287568632"

const sendSMS= async(to, from,otp)=>{
  await client.messages
    .create({
       body: otp,
       from: from,
       to: to
     })
    .then(message => {console.log(message.sid);
    return message});
}


//Auth Function

module.exports.isAuthenticated = function (req, res, next) {
  console.log(req.headers)
  var token = req.headers["x-access-token"];
  console.log("mytoken is " + token);
  if (!token) res.status (400).json({message:'You have to login first before you can access your lists.'})

  jwt.verify(token, JWTkey, (err) => {

    if (err) {

      res.send("not Autori")

    } else {
      next()

    }
  })

};

//signUpUser

module.exports.signUpUser = async (req, res) => {
  const { Userdata, password } = req.body;
  let Existing 
  if(Userdata.includes("@")){
    Existing = await User.findOne({Email:Userdata})
  }else{
    if(Userdata.length!==10)res.status(400).json({
      message:"Invalied Number"
    })
    Existing = await User.findOne({mobile_Number:Userdata})
  }

  // Check if user already exist
  
  if (Existing) {
    return res.status(400).json({
      message:'Already Esisting'
    })   
  }

  // create new user
  const newUser = await createUser(Userdata, password);
  if (!newUser[0]) {
    return res.status(400).json({
      message: 'Unable to create new user',
    });
  }
  res.send(newUser);
};

//athucation

var isAuthenticated = function (req, res, next) {
  console.log(req.headers)
  var token = req.headers["authorization"];
  console.log("mytoken is " + token);
  if (!token) {
    return res.status(401).json({
      error: null,
      msg: "You have to login first before you can access your lists.",
      data: null
    });
  }

  jwt.verify(token, JWTkey, function (err, decodedToken) {
    if (err) {
      return res.status(401).json({
        error: err,
        msg: "Login timed out, please login again.",
        data: null
      });
    }
    req.decodedToken = decodedToken;
    next();
  });
};

const createUser = async ( Userdata, password) => {
  
  const hashedPassword = await encrypt(password);
  const otpGenerated = Math.floor(100000 + Math.random() * 900000)
  let newUser
  if(Userdata.includes("@")){
     newUser = await User.create({
      Email:Userdata,
      password: hashedPassword,
      otp: otpGenerated,
    });
    if (!newUser) {
      return [false, 'Unable to sign you up'];
    }
    try {
      let mail= await sendMail({
        to: Userdata,
        OTP: otpGenerated,
      });
      console.log(mail);
      return [true, newUser];
    } catch (error) {
      return [false, 'Unable to sign up, Please try again later', error];
    }
  }else{
     newUser = await User.create({
      mobile_Number:Userdata,
      password: hashedPassword,
      otp: otpGenerated,
    });
    if (!newUser) {
      return [false, 'Unable to sign you up'];
    }
    try {
    //  let smss=sendSMS(`+91${Userdata}`,from,otpGenerated)
    //  console.log(smss);
      return [true, newUser];
    } catch (error) {
      return [false, 'Unable to sign up, Please try again later', error];
    }
    
  }
 
};

// Verify
module.exports.verify_OTP = async (req, res) => {
  const { Userdata, otp } = req.body;

  let Existing
  if(Userdata.includes("@")){
    Existing = await User.findOne({Email:Userdata})
  }else{
    Existing = await User.findOne({mobile_Number:Userdata})
  }

  if (!Existing) {
    res.send('User not found');
  }
  if (Existing && Existing.otp !== otp) {
    res.status(400).json({
      message:'Invalid OTP'
    }) 
  }
  const updatedUser = await User.findByIdAndUpdate(Existing._id, {
    $set: { active: true },
  });

  res.send(updatedUser);
};

//signUpUserData---

module.exports.signUpUserData = async (req, res) => {
  const { first_Name, last_Name, Email , mobile_Number} = req.body;
  
  const Users = await User.findOne({$or: [{Email},{mobile_Number}]})
  // Check if user already exist

  if (!Users) return res.status(400).json({
    message:'No User'
  }) 

  // create new user
  const updatedUser = await User.findByIdAndUpdate(Users._id, {
    $set: { first_Name, last_Name, Email , mobile_Number},
  });

  res.send(updatedUser);
};

//Reset Password

module.exports.RestPasswordsendOTP = async (req, res) => {
  const { Userdata } = req.body;

  // Check if user already exist
  let Existing
  if(Userdata.includes("@")){
    Existing = await User.findOne({Email:Userdata})
  }else{
    Existing = await User.findOne({mobile_Number:Userdata})
  }

  if (!Existing) {
    res.status(400).json({
      messages:'User Not found'
    }) 
  }
  const otpGenerated = Math.floor(100000 + Math.random() * 900000)
  const updatedUser = await User.findByIdAndUpdate(Existing._id, {
    $set: { otp: otpGenerated },
  });
  if (!updatedUser) {
    return res.status(400).json({
      message:'Unable to Genrate OTP'
    })    
  }
  try {
    if(Userdata.includes("@")){
      let mail= await sendMail({
        to: Userdata,
        OTP: otpGenerated,
      });
      console.log(mail);
      return res.status(200).json({message:'Mail Send',OTP:otpGenerated})
    }else{
      // sendSMS(`+91${runUserdata}`,from,otpGenerated)
      return res.status(200).json({
        message:'SMSS Send',OTP:otpGenerated
      })   
    }
    
   } catch (error) {
    return res.status(400).json({
      message:'Unable to Send OTP, Please try again later'
     })  
   }

};
//.RestPasswordOtp

module.exports.RestPasswordOtp = async (req, res) => {
  const { otp,Userdata} = req.body;
  
  let Existing
  if(Userdata.includes("@")){
    Existing = await User.findOne({Email:Userdata})
  }else{
    Existing = await User.findOne({mobile_Number:Userdata})
  }
  if(!Existing)return res.status(400).json({
    message:'No User Exiting'
  })
  if (Existing.otp==otp) {
    return res.status(200).json({
      message:'Correct OTP'
    })   
  }else{
    return res.status(400).json({
      message:'incorrect OTP'
    })   
  }
};

//RestPassword ---

module.exports.RestPassword = async (req, res) => {
  const { newpassword,Userdata,confirmpassword} = req.body;

  if (newpassword !== confirmpassword || newpassword.length < 5)
    res.status(400).json({message:'Password Invalid',status:false})   
 
  let Existing
  if(Userdata.includes("@")){
    Existing = await User.findOne({Email:Userdata})
  }else{
    Existing = await User.findOne({mobile_Number:Userdata})
  }
  if (!Existing) {
    return res.status(400).json({
      message:'No User Existing'
    }) 
  }
  const hashedPassword = await encrypt(newpassword);
  const updatedUser = await User.findByIdAndUpdate(Existing._id, {
    $set: { password: hashedPassword },
  });
  if (!updatedUser) {
    return res.status(400).json({
      message:'Password not Update'
    }) 
  }else{
    return res.status(200).json({
      message:'Password Update Successfully'
    })  
  }
};

//login ------
//created toke 

module.exports.login = async (req, res) => {

  try {
    const {Userdata, password } = req.body;

    if (!(Userdata && password)) {
      res.status(400).json({
        message:'All input is required'
      })  
    }
 
    let Existing
    if(Userdata.includes("@")){
      Existing = await User.findOne({Email:Userdata})
    }else{
      if(Userdata.length!==10)res.status(400).json({message:'This Number IS not Registred'})
      Existing = await User.findOne({mobile_Number:Userdata})
    }
    if (!Existing) {
      return res.status(400).json({
        message:'No User Existing'
      })    
    }

    if (Existing && (await compare(password, Existing.password))) {
      const token = jwt.sign(
        { user_id: Existing._id },
        JWTkey,
        {
          expiresIn: "8h",
        }
      );
      res.send({ Existing, token });

      res.status(200).json(Existing);
    }
    res.status(400).json({
      message:'Invalid Credentials'
    }) 
  } catch (err) {
    console.log(err);
  }

};








//post api for User profile

module.exports.SettingUserprofile = async (req, res) => {
  let val = req.body
  val['profileImg'] = req.file.originalname
  const data = await postdata(User, val)
  if (!data) {
    res.status(400).json({
      message:'Something went wrong',status:false
    })
  } else {
    res.status(200).json({
      message: 'User Is Successfully', status: true,
      data:data
    })
  }
};







