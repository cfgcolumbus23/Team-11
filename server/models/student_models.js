const mongoose = require("mongoose")

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
    }

}, {timestamps: true});

module.exports = mongoose.model("student", studentSchema)