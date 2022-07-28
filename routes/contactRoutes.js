const router = require('express').Router();
const Contact = require('../controllers/ContactController');


router.post('/contactdata',Contact.ContactStudentpost);

router.post('/Viewcontact/:id',Contact.getContact)

router.patch('/editcontact/:id',Contact.StudentContactPatch)

router.delete('/removeattendence/:id',Contact.DeleteStudentContactprofiles)


module.exports = router;
