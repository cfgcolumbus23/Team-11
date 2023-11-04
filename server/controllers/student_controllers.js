const studentModels = require("../models/student_models");
const assessmentModels = require("../models/assessmentQuestions_models");

// make students
const makeStudent = async (req, res) => {
  const { 
    firstName, 
    lastName, 
    DOB,
    contactFirstName,
    contactLastName,
    contactNumber,
    relationshipToStudent
} = req.body;

  try {
    const student = await studentModels.create({
      firstName,
      lastName,
      DOB,
      contactFirstName,
      contactLastName,
      contactNumber,
      relationshipToStudent
    });

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a list of students
const getStudents = async (req, res) => {
  try {
    const students = await studentModels.find({});
    
    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found.' });
    }
    res.status(200).json(students);
  } catch (error) {
    console.error('Error getting students:', error);
    res.status(500).json({ error: 'Failed to retrieve students' });
  }
};

// Get a certain student
const getStudentsbyId = async (req, res) => {
  const studentId = req.params.studentId;

  try {
    const student = await studentModels.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error('Error getting student by ID:', error);
    res.status(500).json({ error: 'Failed to retrieve student by ID' });
  }
};

const addAssessmentToStudent = async (req, res) => {
  const studentId = req.params.studentId;
  const assessmentId = req.params.assessmentId;

  try {
    // Find the student by their ID
    const student = await studentModels.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    // Find the assessment by its ID
    const assessment = await assessmentModels.findById(assessmentId);

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found.' });
    }

    student.assessments.push(assessmentId)

    // Continue with the association of the assessment with the student
    // ...
  } catch (error) {
    console.error('Error associating assessment with student:', error);
    res.status(500).json({ error: 'Failed to associate assessment with student' });
  }
};

module.exports = {
  makeStudent,
  getStudents,
  getStudentsbyId,
  addAssessmentToStudent
};
