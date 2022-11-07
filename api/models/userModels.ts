const {mongoose} = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: false},
    firstName: {type: String, required: false, unique: false},
    lastName: {type: String, required: false, unique: false},
    phoneNumber: {type: String, required: false, unique: true},
    isAdmin: {type: Boolean, default: false},
    profilePicture: {type: String, required:false},
    getNotifications: {type: Boolean, default: false},
    displayName: {type: String, required: false, unique: false}
},
{
    timestamp: true,
})

export {}
const UserModel = mongoose.model("UserModel", User)
module.exports = UserModel