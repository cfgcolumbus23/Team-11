const rawAssessmentScoresModel = require("../models/rawAssessmentScores_models")

//Add
const addRawAssesmentScore = async (req, res) => {
    const {
        studentId,
        date,
        school,
        teacher,
        question_scores,
        observations,
        recommendations
    } = req.body

    try {
        const rawAssessmentScore = await rawAssessmentScoresModel.create({
            studentId,
            date,
            school,
            teacher,
            question_scores,
            observations,
            recommendations
        })
        res.status(200).json(rawAssessmentScore)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    addRawAssesmentScore
}