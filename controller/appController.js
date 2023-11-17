const nodemailer = require('nodemailer');
const mailgen = require('mailgen');

const {EMAIL,PASSWORD} = require('../env.js');

const generateOTP = require('./generateOTP.js');

const signup = async(req,res) => {
    
   const { userEmail } = req.body;

   const otp = generateOTP;

   let config = {
    service: 'gmail',
    auth : {
        user: EMAIL,
        pass: PASSWORD
    }
   }

   let transporter = nodemailer.createTransport(config)



   let message = {
    from: EMAIL,
    to : userEmail,
    subject: "OTP from our team Conatus",
    text:`Your OTP is ${otp}`,
   }

   transporter.sendMail(message).then(() => {
    return res.status(201).json({msg:"you should receive the email"})
   }).catch(Error => {
    return res.status(500).json({Error})
   })

    // res.status(201).json("Signup Successfully...!");
}

const verifyemail = async(req,res) => {
    const otp = generateOTP;
     const { userotp } = req.body;
     if(userotp == otp)
     {
        res.status(201).json({msg:"Your OTP is verified"});
     }
     else if(userotp != otp)
     {
        res.status(500).json({msg:"Your OTP is not verified"});
     }
}


module.exports = {
    signup,
    verifyemail
}