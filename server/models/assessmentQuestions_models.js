const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    question: {
        type: String, 
        required: true
    },
    pointsIncrement: {
        type: Number,
        required: true
    },
    totalPoints: {
        type: Number,
        required: true
    },
    questionCategory: {
        type: String,
        required: true
    }
})

const assessmentQuestionsSchema = new mongoose.Schema({
    testId: {
        type: String,
        required: true
    },
    questions: [questionSchema]
}, {timestamps: true})

module.exports = mongoose.model("assessment_questions", assessmentQuestionsSchema)