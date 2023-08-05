const { Router } = require('express');
const {
  getStudents,
  getStudentsId,
  addStudents,
  removeStudents,
  updateStudents,
} = require('./controller');
const router = Router();

router
  .get('/', getStudents)
  .get('/:id', getStudentsId)
  .put('/:id', updateStudents)
  .post('/', addStudents)
  .delete('/:id', removeStudents);

module.exports = router;
