const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
require("dotenv").config()

const rawAssessmentScoresRouter = require("./routes/rawAssessmentScores_routes")
const assessmentQuestionsRouter = require("./routes/assessmentQuestions_routes") 
const userProfileRouter = require("./routes/user_profile_router")
const studentRouter = require("./routes/studentRouter")

//Create app
const app = express()

app.use(cors());

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
app.use("/api/assessmentQuestions",assessmentQuestionsRouter)
app.use("/api/userProfile", userProfileRouter)
app.use("/api/student", studentRouter)


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