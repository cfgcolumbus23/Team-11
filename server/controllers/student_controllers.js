const studentModels = require("../models/student_models");

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

module.exports = {
  makeStudent,
  getStudents,
  getStudentsbyId
};
