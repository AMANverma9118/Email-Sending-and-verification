const express = require('express');
const appRoute = require('./routes/route')
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(bodyParser.json()); // Parses JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded form data



// routes
app.use('/api',appRoute);

app.get('/api',(req,res)=>{
    res.send('Hello everyone');
})

app.listen(PORT,()=>{
    console.log(`Server is runing on http://localhost:${PORT}`)
    
})