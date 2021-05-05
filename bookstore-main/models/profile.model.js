const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    mobile: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
    // with auth
  /*  _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }*/

})

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = { Profile }