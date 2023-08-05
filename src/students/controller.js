const pool = require('../db');
const {
  getStudents,
  getStudentsById,
  checkEmailExist,
  addStudents,
  deleteStudents,
  updateStudents,
} = require('./queries');

exports.getStudents = (req, res) => {
  pool.query(getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

exports.getStudentsId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getStudentsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

exports.addStudents = (req, res) => {
  const { name, email, age, dob } = req.body;

  //check if email exist
  pool.query(checkEmailExist, [email], (error, results) => {
    if (results.rows.length) {
      res.send('Email already exist!');
    }

    //add students to db
    pool.query(addStudents, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).send('Student Created Successfully!');
    });
  });
};

exports.removeStudents = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getStudentsById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send('Students does not exist in the database');
    }
  });

  pool.query(deleteStudents, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send('Student Succesfully deleted');
  });
};

exports.updateStudents = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(getStudentsById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send('Students does not exist in the database');
    }

    pool.query(updateStudents, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send('Student updated successfully!');
    });
  });
};
