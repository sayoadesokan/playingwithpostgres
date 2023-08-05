exports.getStudents = 'SELECT * FROM students';
exports.getStudentsById = 'SELECT * FROM students WHERE id = $1';
exports.checkEmailExist = 'SELECT s FROM students s WHERE s.email = $1';
exports.addStudents =
  'INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)';
exports.deleteStudents = 'DELETE FROM students WHERE id = $1';
exports.updateStudents = 'UPDATE students SET name = $1 WHERE id = $2';
