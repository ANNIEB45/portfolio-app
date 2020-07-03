const express = require('express')
const emailRouter = require('./controllers/email.js')

const nodemailer = require('nodemailer')
const config = require('./config.js')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/portfolio/build/'))

app.use('/api/email', emailRouter)


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/portfolio/build/index.html')
  })

// app.get('/', (req, res) => {
//     res.send('You are connected')
// })

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
// WORKS