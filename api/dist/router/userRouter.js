"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requireLogin = require("../middleware/requireLogin");
const { signUp, signIn } = require("../controllers/userControllers");
const router = require("express").Router();
router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
module.exports = router;
