const express = require("express")
const {
    addRawAssesmentScore
} = require("../controllers/rawAssessmentScores_controllers")

const router = express.Router()

router.post("/", addRawAssesmentScore)

module.exports = router