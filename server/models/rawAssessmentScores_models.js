const mongoose = require("mongoose")

const rawAssessmentScoresSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    question_scores: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model("raw_assessment_scores", rawAssessmentScoresSchema)