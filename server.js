require("dotenv").config();

const express = require('express');
const appRoute = require('./routes/route')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;







main().then(res => console.log("db connected successfuly"));
main().catch(err => console.log("db not connected..!!!", err));

async function main() {
  await mongoose.connect( "mongodb://127.0.0.1:27017/information");


  
}

app.use(bodyParser.json()); // Parses JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded form data


app.use(express.json());





// routes
app.use('/',appRoute);

app.get('/',(req,res)=>{
    res.send('Hello everyone, Your name');
})

app.listen(PORT,()=>{
    console.log(`Server is runing on http://localhost:${PORT}`)
    
})