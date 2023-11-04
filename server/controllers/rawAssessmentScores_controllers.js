const rawAssessmentScoresModel = require("../models/rawAssessmentScores_models")
const {addAssessmentToStudent} = require("../controllers/student_controllers")

//Add an assessment
const addRawAssesmentScore = async (req, res) => {
    const {
        studentId,
        testId,
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
            testId,
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