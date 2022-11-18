"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
    firstName: { type: String, required: false, unique: false },
    lastName: { type: String, required: false, unique: false },
    phoneNumber: { type: String, required: false, unique: true, default: null },
    isAdmin: { type: Boolean, default: false },
    profilePicture: { type: String, required: false, default: "https://www.si.edu/sites/default/files/blog/mountain_bluebird-630x4271.jpg" },
    cover: { type: String, default: "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" },
    getNotifications: { type: Boolean, default: false },
    displayName: { type: String, required: false, unique: false }
}, {
    timestamp: true,
});
const UserModel = mongoose.model("UserModel", User);
module.exports = UserModel;
