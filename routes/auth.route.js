const router = require('express').Router();
const authController = require('../controllers/auth.controller');


//Images Upload
const app = require("express");
const path = require("path");
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

//signUpUser

router.post('/', authController.signUpUser);

//UserData fill
router.post('/signupuser', authController.signUpUserData);

//verify--
router.post('/verify', authController.verify_OTP);

//resetpassword
router.post('/resetpassword', authController.RestPasswordsendOTP);

//otpcheck
router.post('/otpcheck', authController.RestPasswordOtp);

//RestPasswordLink
router.post('/reset', authController.RestPassword);

//login
router.post('/login', authController.login);


//setting User profiles
router.post('/edituserprofiles',upload.single("myField"), authController.SettingUserprofile)


module.exports = router;



