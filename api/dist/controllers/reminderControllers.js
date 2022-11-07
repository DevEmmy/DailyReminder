"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReminderModel = require("../models/reminderModels");
//Get All Reminders
const getAllReminders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield ReminderModel.find().populate("postedBy")
        .then((resp) => {
        res.status(200).json(resp);
    })
        .catch((err) => res.status(400).json(err));
});
const postAReminder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reminder = req.body;
    reminder.postedBy = req === null || req === void 0 ? void 0 : req.user;
    yield new ReminderModel(reminder).save()
        .then((response) => {
        res.json({ message: "Successfully uploaded", reminder: response });
    })
        .catch((err) => {
        res.status(400).json({ message: "An Error Occured", error: err });
    });
});
const updateAReminder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const update = req.body;
    yield ReminderModel.findByIdAndUpdate(id, update, { new: true }).populate("postedBy")
        .then((resp) => {
        res.json({ message: "Updated Successfully", reminder: resp });
    })
        .catch((err) => {
        res.status(400).json({ message: "An Error Occured", error: err });
    });
});
const deleteAReminder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield ReminderModel.findByIdAndDelete(id)
        .then((resp) => {
        res.json({ message: "Deleted Successfully", reminder: resp });
    })
        .catch((err) => {
        res.status(400).json({ message: "An Error Occured", error: err });
    });
});
const getAReminder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield ReminderModel.findById(id).populate("postedBy")
        .then((resp) => {
        res.status(200).json(resp);
    })
        .catch((err) => res.status(400).json(err));
});
module.exports = { getAllReminders, postAReminder, updateAReminder, deleteAReminder, getAReminder };
