const mongoose = require("mongoose")

const rawAssessmentScoresSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    question1_score: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("raw_assessment_scores", rawAssessmentScoresSchema)