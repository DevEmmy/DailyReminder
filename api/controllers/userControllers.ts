const UserModel = require("../models/userModels")
const bcrypt = require("bcrypt")
const jwt_secret = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')

const signIn = async (req:any, res:any)=>{
    const {email, password} = req.body;
    await UserModel.findOne({email:email})
    .then((user:any)=>{
        if(!user){
            res.json({message: "There is no user with this email"})
        }
        else{
            bcrypt.compare(password, user.password)
        .then((doMatch:any)=>{
            if(doMatch){
                const token = jwt.sign({_id: user._id}, jwt_secret)
                res.json({token: token, user:user, message: "Successful"})
            }
            else{
                res.json({message: "Wrong Password"})
            }
        })
        .catch((err: Error) => res.json({message: "An Error Occured", error: err}))
        }
        
    })
    .catch((err: Error) => res.json({message: "An Error Occured", error: err}))
}

const signUp = async (req:any, res:any)=>{
    const user = req.body;
    const {password} = req.body;
    await bcrypt.hash(password, 8)
    .then((hashedPassword: string) =>{
        user.password = hashedPassword;
        new UserModel(user).save()
        .then((user:any)=>{
            const token = jwt.sign({_id: user._id}, jwt_secret)
            res.json({token: token, user:user, message: "Successful"})
        })
        .catch((err: Error) => res.status(400).json({message: "An Error Occured", error: err}))
    })
    .catch((err: Error) => res.status(403).json({message: "An Error Occured", error: err}))
}

const updateUser = async (req:any, res:any)=>{
    const update = req.body;
    const user = req.user;
    await UserModel.findByIdAndUpdate(user._id, update, {new:true})
    .then((resp:Response) => {res.json(resp)})
    .catch((err: Error) => res.status(403).json({message: "An Error Occured", error: err}))
}

export {}
module.exports = {signUp, signIn, updateUser};