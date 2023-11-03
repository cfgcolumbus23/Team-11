const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const rawAssessmentScoresRouter = require("./routes/rawAssessmentScores_routes")
const userProfileRouter = require("./routes/user_profile_router")

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
app.use("/api/rawAssessmentScores",rawAssessmentScoresRouter)
app.use("/api/userProfile", userProfileRouter)


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