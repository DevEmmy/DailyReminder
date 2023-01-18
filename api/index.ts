import { strict } from "assert";

// Using express 
const app = require("express")();
const cors = require("cors")
const {mongoose} = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv").config()
const remindersRouter = require("./router/remindersRouter.js")
const userRouter = require("./router/userRouter.js")


const port:number = parseInt(process.env.PORT as string, 10)
const uri:string = process.env.DB_URI as string

// Databse connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection
connection.once("open", ():any=>{console.log("Database running successfully")})


// use of cors
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH","PUT", "DELETE"]
}))

// use of bodyParser
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: false}));

// Use of routes
app.use("/reminder", remindersRouter)
app.use("/user", userRouter)

// running the server
app.listen(port, ():void=>{console.log(`Server is running on port ${port}`)})
