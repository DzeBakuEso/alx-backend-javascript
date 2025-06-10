const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  let response = 'This is the list of our students';

  try {
    const result = await countStudents(database);
    response += `\n${result}`;
    res.send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port);

module.exports = app;
