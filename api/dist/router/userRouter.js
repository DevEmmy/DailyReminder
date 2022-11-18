"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requireLogin = require("../middleware/requireLogin");
const { signUp, signIn, updateUser } = require("../controllers/userControllers");
const router = require("express").Router();
router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.patch("/update", requireLogin, updateUser);
module.exports = router;
