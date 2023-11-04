const assessmentQuestionsModel = require("../models/assessmentQuestions_models")

//Add one assessment question
const addAssessmentQuestion = async (req, res) => {
    const {
        testId,
        question,
        pointsIncrement,
        totalPoints,
        questionCategory
    } = req.body

    try {
        const assessmentQuestion = await assessmentQuestionsModel.create({
            testId,
            question,
            pointsIncrement,
            totalPoints,
            questionCategory
        })
        res.status(200).json(assessmentQuestion)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Get all assessment questions
const getAssessmentQuestions = async (req, res) => {
    const {testId}=req.params

    try{
        const assessmentQuestions = await assessmentQuestionsModel.find({testId})

        res.status(200).json(assessmentQuestions)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    addAssessmentQuestion,
    getAssessmentQuestions
}