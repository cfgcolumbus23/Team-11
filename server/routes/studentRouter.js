const express = require("express")

const {
    makeStudent
} = require("../controllers/student_controllers")

const {
    getStudents
} = require("../controllers/student_controllers")

const {
    getStudentsbyId
} = require("../controllers/student_controllers")

const router = express.Router()

router.post("/", makeStudent)

router.get("/", getStudents)

router.get("/:studentId", getStudentsbyId)

module.exports = router