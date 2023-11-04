const express = require("express")
const {
    getReports
} = require("../controllers/getReportController")

const router = express.Router()

router.get("/:studentId", getReports)


module.exports = router