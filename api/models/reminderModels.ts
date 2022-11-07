const {mongoose} = require("mongoose");
const Schema = mongoose.Schema;

const Reminder = new Schema({
    postedBy: {type: Schema.Types.ObjectId, required: true},
    content: {type: String, required: true},
},{
    timestamp: true
})

export {}
const ReminderModel = mongoose.model("ReminderModel", Reminder)
module.exports = ReminderModel