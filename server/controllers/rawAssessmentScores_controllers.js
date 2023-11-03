const rawAssessmentScoresModel = require("../models/rawAssessmentScores_models")

//Add
const addRawAssesmentScore = async (req, res) => {
    const {
        studentId,
        question1_score
    } = req.body

    try{
        const rawAssessmentScore = await rawAssessmentScoresModel.create({
            studentId,
            question1_score
        })
        res.status(200).json(rawAssessmentScore)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    addRawAssesmentScore
}