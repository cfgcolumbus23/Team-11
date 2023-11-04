const mongoose = require("mongoose")

const rawAssessmentScoresSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    testId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    question_scores: {
        type: Array,
        required: true
    },
    observations: {
        type: String,
        required: true
    },
    recommendations: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("raw_assessment_scores", rawAssessmentScoresSchema)