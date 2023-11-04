const assessmentQuestionsModel = require("../models/assessmentQuestions_models")

//Add one assessment question
const addAssessmentQuestion = async (req, res) => {
    const {
        testId,
        question,
        pointsIncrement,
        totalPoints
    } = req.body

    try {
        const assessmentQuestion = await assessmentQuestionsModel.create({
            testId,
            question,
            pointsIncrement,
            totalPoints
        })
        res.status(200).json(assessmentQuestion)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Get all assessment questions
const getAssessmentQuestions = async (req, res) => {
    const {testId}=req.body

    try{
        const assessmentQuestions = await assessmentQuestionsModel.find({testId})

        const questionArray=[]
        const incrementPointsArray=[]
        const totalPointsArray=[]

        assessmentQuestions.map((assessmentQuestion) => {
            questionArray.push(assessmentQuestion.question)
            incrementPointsArray.push(assessmentQuestion.pointsIncrement)
            totalPointsArray.push(assessmentQuestion.totalPoints)
        })

        res.status(200).json({questionArray, incrementPointsArray, totalPointsArray})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    addAssessmentQuestion,
    getAssessmentQuestions
}