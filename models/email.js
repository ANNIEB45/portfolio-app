const mongoose = require('../connection.js')

const Schema = mongoose.Schema

const EmailSchema = new Schema({
    name: String,
    email: String,
    message: String
})

const EmailModel = mongoose.model('email', EmailSchema)

//Get All
const getAllEmail = () => {
    return EmailModel.find({})
}

//Get One
const getOneEmail = (emailId) => {
    return EmailModel.findById(emailId)
}

//Create
const createEmail = (emailData) => {
    return EmailModel.create(emailData)
}

//Update
const updateEmail = (emailId, emailData) => {
    return EmailModel.findByIdAndUpdate(emailId, emailData)
}

//Delete
const deleteEmail = (emailId) => {
    return EmailModel.findOneAndDelete(emailId)
}

module.exports = {
    getAllEmail,
    getOneEmail,
    createEmail,
    updateEmail,
    deleteEmail
}