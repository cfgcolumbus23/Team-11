const studentModels = require("../models/student_models");

const makeStudent = async (req, res) => {
  const { 
    firstName, 
    lastName, 
    DOB 
} = req.body;

  try {
    const student = await studentModels.create({
      firstName,
      lastName,
      DOB,
    });

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  makeStudent,
};
