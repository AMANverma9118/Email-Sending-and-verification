const express = require('express')

const router = express.Router();

const Usermodel = require('../modules/schema.js');
const {signup , verifyemail, Registration} = require('../controller/appController.js');






router.post('/user/signup',signup);
router.post('/emailverify/signup',verifyemail);
router.post('/User/Registration',Registration);

module.exports = router;