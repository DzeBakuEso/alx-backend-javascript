const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

/**
 * GET /
 * Responds with “Hello ALX!” as plain text.
 */
app.get('/', (req, res) => {
  res.status(200).type('text/plain').send('Hello ALX!');
});

/**
 * GET /students
 * Responds with the list of students (or an error) as plain text.
 */
app.get('/students', (req, res) => {
  const database = process.argv[2];
  const header = 'This is the list of our students';

  res.type('text/plain');

  countStudents(database)
    .then((report) => {
      res.status(200).send(`${header}\n${report}`);
    })
    .catch((err) => {
      res.status(500).send(`${header}\n${err.message}`);
    });
});

app.listen(PORT);

module.exports = app;
