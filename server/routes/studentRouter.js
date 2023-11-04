const express = require("express")
const {
    makeStudent
} = require("../controllers/student_controllers")
const {
    getStudents
} = require("../controllers/student_controllers")

const router = express.Router()

router.post("/", makeStudent)


router.get("/", getStudents)


module.exports = router