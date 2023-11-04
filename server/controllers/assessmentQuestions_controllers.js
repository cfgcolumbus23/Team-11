const assessmentQuestionsModel = require("../models/assessmentQuestions_models")

//Add one assessment question
const addAssessmentQuestion = async (req, res) => {
    const {
        testId,
        questions
    } = req.body

    try {
        const assessmentQuestion = await assessmentQuestionsModel.create({
            testId,
            questions
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
        const assessmentQuestions = await assessmentQuestionsModel.findOne({testId})

        res.status(200).json({questions: assessmentQuestions.questions})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getAssessmentIds = async (req, res) => {
    try{
        const assessments = await assessmentQuestionsModel.find()
        const assessmentIds = []
        assessments.map((assessment) => {
            assessmentIds.push(assessment.testId)
        })
        res.status(200).json(assessmentIds)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    addAssessmentQuestion,
    getAssessmentQuestions,
    getAssessmentIds
}