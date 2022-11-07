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
const UserModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt_secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    yield UserModel.findOne({ email: email })
        .then((user) => {
        if (!user) {
            res.json({ message: "There is no user with this email" });
        }
        else {
            bcrypt.compare(password, user.password)
                .then((doMatch) => {
                if (doMatch) {
                    const token = jwt.sign({ _id: user._id }, jwt_secret);
                    res.json({ token: token, user: user, message: "Successful" });
                }
                else {
                    res.json({ message: "Wrong Password" });
                }
            })
                .catch((err) => res.json({ message: "An Error Occured", error: err }));
        }
    })
        .catch((err) => res.json({ message: "An Error Occured", error: err }));
});
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const { password } = req.body;
    yield bcrypt.hash(password, 8)
        .then((hashedPassword) => {
        user.password = hashedPassword;
        new UserModel(user).save()
            .then((user) => {
            const token = jwt.sign({ _id: user._id }, jwt_secret);
            res.json({ token: token, user: user, message: "Successful" });
        })
            .catch((err) => res.json({ message: "An Error Occured", error: err }));
    })
        .catch((err) => res.json({ message: "An Error Occured", error: err }));
});
module.exports = { signUp, signIn };
