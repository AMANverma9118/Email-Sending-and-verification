
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        unique:true
    },
    UserPhonenumber: {
        type: Number,
        required: true,
        unique:true
    },
    UserGender: {
        type: String,
        required: true,
        unique:true


    },
    UserBio: {
        type: String,
        required: true,
        unique:true
    },
   







    
});

module.exports = mongoose.model('user', userSchema);
