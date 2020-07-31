// const express = require('express')
// const emailModel = require('../models/email')
// const nodemailer = require('nodemailer')
// const emailRouter = express.Router()


// //Get all
// emailRouter.get('/', (req, res) => {
//     emailModel.getAllEmail()
//         .then(allEmails => {
//             res.json(allEmails)
//         })
//         .catch(err => {
//             res.status(500).json(err)
//             console.log('failed to get all email 😟😟😟😟')
//             console.log(err)
//         })
// })


// //Get one
// emailRouter.get('/:emailId', (req, res) => {
//     emailModel.getOneEmail(req.params.emailId)
//         .then(singleEmail => {
//             res.json(singleEmail)
//         })
//         .catch(err => {
//             res.status(500).json(err)
//             console.log('failed to create email 😟😟😟😟')
//             console.log(err)
//         })
// })


// //Create(Post)
// emailRouter.post('/', (req, res) => {
//     emailModel.createEmail(req.body)
//         .then(() => {
//             res.json('created')
//         })
//         .catch(err => {
//             res.status(500).json(err)
//             console.log('failed to create email 😟😟😟😟')
//             console.log(err)
//         })
// })


// //Update(Put)
// emailRouter.put('/:emailId', (req, res) => {
//     emailModel.updateEmail(req.params.emailId, req.body)
//         .then(() => {
//             res.json('updated')
//         })
//         .catch(err => {
//             res.status(500).json(err)
//             console.log('failed to update email 😟😟😟😟')
//             console.log(err)
//         })
// })


// //Delete
// emailRouter.delete('/:emailId', (req, res) => {
//     emailModel.deleteEmail(req.params.emailId)
//         .then(() => {
//             res.json('deleted')
//         })
//         .catch(err => {
//             res.status(500).json(err)
//             console.log('failed to delete email 😟😟😟😟')
//             console.log(err)
//         })
// })


// module.exports = emailRouter


// //WORKS