"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const Reminder = new Schema({
    postedBy: { type: Schema.Types.ObjectId, ref: "UserModel" },
    content: { type: String, required: true },
}, {
    timestamp: true
});
const ReminderModel = mongoose.model("ReminderModel", Reminder);
module.exports = ReminderModel;
