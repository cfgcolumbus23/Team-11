const express = require("express")
const {
    addAssessmentQuestion,
    getAssessmentQuestions
} = require("../controllers/assessmentQuestions_controllers")

const router = express.Router()

router.post("/", addAssessmentQuestion)
router.get("/:testId", getAssessmentQuestions)

module.exports = router