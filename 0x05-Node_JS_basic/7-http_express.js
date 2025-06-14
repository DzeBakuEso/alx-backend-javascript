// 7-http_express.js
import express from 'express';
import { readFile } from 'fs/promises';

const app = express();
const port = 1245;

function countStudents(path) {
  return readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
      const headers = lines.shift().split(',');
      const students = {};
      for (const line of lines) {
        const values = line.split(',');
        const field = values[3];
        if (!students[field]) students[field] = [];
        students[field].push(values[0]);
      }

      let output = `Number of students: ${lines.length}`;
      for (const [field, names] of Object.entries(students)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }
      return output;
    });
}

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  const db = process.argv[2];
  try {
    const report = await countStudents(db);
    res.send(`This is the list of our students\n${report}`);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port);

export default app;
