const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // skip header
      const fields = {};

      for (const student of students) {
        const details = student.split(',');
        const field = details[3];
        const firstName = details[0];
        if (field in fields) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
      }

      let output = `Number of students: ${students.length}`;
      for (const [field, names] of Object.entries(fields)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(output);
    });
  });
}

const app = http.createServer((req, res) => {
  const databasePath = process.argv[2];
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    countStudents(databasePath)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch((err) => {
        res.end('This is the list of our students\n' + err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
