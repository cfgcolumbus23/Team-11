const express = require("express")
const {
    getreport
} = require("../controllers/getReportController")

const router = express.Router()

router.get("/:studentId", getreport)

module.exports = router