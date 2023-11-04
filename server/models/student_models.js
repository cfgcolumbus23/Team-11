const mongoose = require("mongoose");
const rawAssessmentScores_models = require("./rawAssessmentScores_models");

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requied: true,
    },
    lastName: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    contactFirstName: {
        type: String,
        required: true
    },
    contactLastName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    relationshipToStudent: {
        type: String,
        required: true
    },
    assessments: [
        {
           testId: String,
        },
    ]
},{timestamps: true});

module.exports = mongoose.model("student", studentSchema)