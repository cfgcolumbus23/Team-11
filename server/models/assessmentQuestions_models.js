const mongoose = require("mongoose")

const assessmentQuestionsSchema = new mongoose.Schema({
    testId: {
        type: String,
        required: true
    },
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
}, {timestamps: true})

module.exports = mongoose.model("assessment_questions", assessmentQuestionsSchema)