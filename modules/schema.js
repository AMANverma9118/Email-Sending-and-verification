
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    UserPhonenumber: {
        type: Number,
        required: true
    },
    UserGender: {
        type: String,
        required: true,


    },
    UserBio: {
        type: String,
        required: true
    },
    verified:{
        type: String,
    }







    
});

module.exports = mongoose.model('user', userSchema);
