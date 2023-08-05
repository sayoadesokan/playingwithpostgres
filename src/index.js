const express = require('express');
const router = require('./students/routes');
const app = express();
const port = 9000;

app.use(express.json());

app.use('/api/v1/students', router);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
