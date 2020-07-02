const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.send('This is the home page')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
// WORKS