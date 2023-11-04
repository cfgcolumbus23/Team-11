const express = require("express")
const {
    addAssessmentQuestion,
    getAssessmentQuestions
} = require("../controllers/assessmentQuestions_controllers")

const router = express.Router()

router.post("/add", addAssessmentQuestion)
router.post("/get", getAssessmentQuestions)

module.exports = router