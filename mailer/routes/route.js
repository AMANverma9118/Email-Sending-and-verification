const router = require('express').Router();


const {signup} = require('../controller/appController.js')



router.post('/user/signup',signup);

module.exports = router;