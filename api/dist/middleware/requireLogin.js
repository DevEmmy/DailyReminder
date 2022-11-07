"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwt_secret = process.env.JWT_SECRET;
const UserModel = require('../models/userModels.js');
module.exports = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ error: "You must Be authorized" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, jwt_secret, (err, payload) => {
        if (err) {
            res.status(401).json({ error: "you must be logged in" });
        }
        const { _id } = payload;
        UserModel.findById(_id).then((userdata) => {
            req.user = userdata;
            next();
        });
    });
};
