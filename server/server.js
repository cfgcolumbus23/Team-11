const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

//Create app
const app = express()

//Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB")
        listen()
    })
    .catch((error) => {
        console.log(error)
    })

//Listen
const listen = () => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on Port", process.env.PORT)
    })
}