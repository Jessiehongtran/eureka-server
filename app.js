const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/', (req,res) => {
    res.send('Yo all!')
})

module.exports = app;