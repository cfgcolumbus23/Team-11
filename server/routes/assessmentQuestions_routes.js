const express = require("express")
const {
    addAssessmentQuestion,
    getAssessmentQuestions,
    getAssessmentIds
} = require("../controllers/assessmentQuestions_controllers")

const router = express.Router()

router.post("/", addAssessmentQuestion)
router.get("/questions/:testId", getAssessmentQuestions)
router.get("/ids", getAssessmentIds)

module.exports = router