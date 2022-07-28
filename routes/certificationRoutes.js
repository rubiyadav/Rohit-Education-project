const router = require('express').Router();

const certification = require('../controllers/certificateController')
const { isAuthenticated } = require('../controllers/auth.controller')


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




router.post('/get-certification', upload.single("myField"), isAuthenticated, certification.ContactStudentpost)

router.get('/get-by-link/:CertificateLink', isAuthenticated, certification.getCertificateByLink)








module.exports = router;