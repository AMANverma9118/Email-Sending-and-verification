const UserModel = require('../modules/schema.js');

const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const {EMAIL,PASSWORD} = require('../env.js');

const generateOTP = require('./generateOTP.js');


const emailOTPMap = new Map();

const signup = async(req,res) => {
    
   const { userEmail } = req.body;
   

   const otp = generateOTP;

   emailOTPMap.set(userEmail,otp);

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

    
}

const verifyemail = (req,res) => {
   
     const { userEmail,otp } = req.body;
    const storedotp = emailOTPMap.get(userEmail);

    if (!storedotp) {
        return res.status(400).send('OTP not found. Please request a new OTP.');
      }



      if (otp == storedotp) {
        
        emailOTPMap.delete(userEmail); // Remove the used OTP from storage
        return res.status(200).send('Email verified successfully!');
      } 
      else {
        return res.status(400).send('Invalid OTP. Please try again.');
      }
    
}


const Registration = async(req,res) => {
    


    

    
    
    try {
        

            let result = await UserModel.create({
                ...req.body,
               
            })


            res.send({
                data: result,
                message: "User created successfully....!!",
                status: true
            })
        
       





    } catch (error) {
        res.status(403).json({ status: false, error: error })
    }

}



module.exports = {
    signup,
    verifyemail,
    Registration
}