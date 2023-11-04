const express = require("express")
const {
    makeStudent
} = require("../controllers/student_controllers")

const router = express.Router()

router.post("/", makeStudent)

module.exports = router