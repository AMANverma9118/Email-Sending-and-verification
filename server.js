require("dotenv").config();

const express = require('express');
const appRoute = require('./routes/route')
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT;








app.use(bodyParser.json()); // Parses JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded form data


app.use(express.json());


const connectDB = require('./mongoose');

connectDB()


// routes
app.use('/',appRoute);

app.get('/',(req,res)=>{
    res.send('Hello everyone, Your name');
})

app.listen(PORT,()=>{
    console.log(`Server is runing on http://localhost:${PORT}`)
    
})