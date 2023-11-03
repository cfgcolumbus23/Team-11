const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express() 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect(process.env.MONGODB_URI)
.then(console.log("Connected to MongoDB"))

app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT)
})
