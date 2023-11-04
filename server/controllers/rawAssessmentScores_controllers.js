const rawAssessmentScoresModel = require("../models/rawAssessmentScores_models")
const student_models = require("../models/student_models")

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

        const temp = await student_models.findByIdAndUpdate({_id: studentId}, {$push: {assessments: rawAssessmentScore._id}})

        res.status(200).json(rawAssessmentScore)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    addRawAssesmentScore
}