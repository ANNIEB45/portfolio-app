const express = require('express')
const emailRouter = require('./controllers/email.js')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/client/build/'))

app.use('/api/email', emailRouter)


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
// WORKS