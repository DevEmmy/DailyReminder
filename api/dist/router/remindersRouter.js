"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const { getAllReminders, postAReminder, updateAReminder, deleteAReminder, getAReminder } = require("../controllers/reminderControllers");
const requireLogin = require("../middleware/requireLogin");
router.route("/")
    .get(getAllReminders)
    .post(requireLogin, postAReminder);
router.patch("/:id", requireLogin, updateAReminder);
router.delete("/:id", requireLogin, deleteAReminder);
router.get("/:id", requireLogin, getAReminder);
module.exports = router;
