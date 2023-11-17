const express = require('express')

const router = express.Router();


const {signup , verifyemail} = require('../controller/appController.js')
// const {verifyemail} = require('../controller/appController.js');


router.post('/user/signup',signup);
router.post('/emailverify/signup',verifyemail);

module.exports = router;