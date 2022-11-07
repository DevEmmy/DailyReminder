const ReminderModel = require("../models/reminderModels")

//Get All Reminders
const getAllReminders = async (req: any, res:any) => {
    await ReminderModel.find().populate("postedBy")
    .then((resp:Response) => {
        res.status(200).json(resp)
    })
    .catch((err: Error)=> res.status(400).json(err))
}

const postAReminder = async (req:any, res: any)=>{
    const reminder = req.body;
    reminder.postedBy = req?.user;
    await new ReminderModel(reminder).save()
    .then((response: Response)=>{
        res.json({message: "Successfully uploaded", reminder: response})
    })
    .catch((err: Error) =>{
        res.status(400).json({message: "An Error Occured", error: err})
    })
}

const updateAReminder = async (req:any, res:any)=>{
    const {id} = req.params;
    const update = req.body;
    await ReminderModel.findByIdAndUpdate(id, update, {new:true}).populate("postedBy")
    .then((resp: Response)=>{
        res.json({message: "Updated Successfully", reminder: resp})
    })
    .catch((err: Error) =>{
        res.status(400).json({message: "An Error Occured", error: err})
    })
}

const deleteAReminder = async (req:any, res:any)=>{
    const {id} = req.params;
    await ReminderModel.findByIdAndDelete(id)
    .then((resp: Response)=>{
        res.json({message: "Deleted Successfully", reminder: resp})
    })
    .catch((err: Error) =>{
        res.status(400).json({message: "An Error Occured", error: err})
    })
}

const getAReminder = async (req:any, res:any)=>{
    const {id} = req.params;
    await ReminderModel.findById(id).populate("postedBy")
    .then((resp:Response) => {
        res.status(200).json(resp)
    })
    .catch((err: Error)=> res.status(400).json(err))
}
export {}
module.exports = {getAllReminders, postAReminder, updateAReminder, deleteAReminder, getAReminder}