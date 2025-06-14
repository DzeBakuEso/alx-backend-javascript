const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  res.setHeader('Content-Type', 'text/plain');
  let response = 'This is the list of our students';

  try {
    const result = await countStudents(database);
    response += `\n${result}`;
    res.status(200).send(response);
  } catch (error) {
    response += `\n${error.message}`;
    res.status(500).send(response);
  }
});

app.listen(PORT);

module.exports = app;
