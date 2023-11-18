const mongoose = require('mongoose');

const connectDB = async ()=> {
    try {
      await mongoose.connect(process.env.DB)
      console.log("connect to mongodb successfully")
    } catch (error) {
      console.log("connect failed"+ error.message)
    }
  }
  
  module.exports = connectDB