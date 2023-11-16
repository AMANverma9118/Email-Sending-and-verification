const nodemailer = require('nodemailer');
const mailgen = require('mailgen');

const {EMAIL,PASSWORD} = require('../env.js')

const signup = async(req,res) => {
    
   const { userEmail } = req.body;

   let config = {
    service: 'gmail',
    auth : {
        user: EMAIL,
        pass: PASSWORD
    }
   }

   let transporter = nodemailer.createTransport(config)


   let MailGenerator = new mailgen({
    theme: "default",
    product : {
        name: "Pooja Verma",
        link: "https://www.bibleinfo.com/en/questions/where-is-heaven"
    }

   })

   let response = {
    body:{
        name:"Hello",
        intro: "Welcome to pooja heaven",
        table : {
            data : [{
                item : "Hello everyone",
                description: "Heaven price for one night",
                price:"$210"
            }]
        }

    }
   }

   let mail = MailGenerator.generate(response)

   let message = {
    from: EMAIL,
    to : userEmail,
    subject: "Kya hai bhai",
    html: mail
   }

   transporter.sendMail(message).then(() => {
    return res.status(201).json({msg:"you should receive the email"})
   }).catch(Error => {
    return res.status(500).json({Error})
   })

    // res.status(201).json("Signup Successfully...!");
}

module.exports = {
    signup
}