"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const { getAllReminders, postAReminder, updateAReminder, deleteAReminder, getAReminder, getMyReminders } = require("../controllers/reminderControllers");
const requireLogin = require("../middleware/requireLogin");
router.route("/")
    .get(getAllReminders);
router.post("/", postAReminder);
router.patch("/:id", requireLogin, updateAReminder);
router.delete("/:id", requireLogin, deleteAReminder);
router.get("/:id", requireLogin, getAReminder);
router.get("/my", requireLogin, getMyReminders);
module.exports = router;
