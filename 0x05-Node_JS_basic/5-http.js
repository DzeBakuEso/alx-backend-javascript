const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      const fields = {};
      students.forEach((line) => {
        const parts = line.split(',');
        const field = parts[3];
        const firstName = parts[0];

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });

      const total = students.length;
      let report = `Number of students: ${total}`;
      for (const [field, names] of Object.entries(fields)) {
        report += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(report);
    });
  });
}

const app = http.createServer((req, res) => {
  const { url } = req;

  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.statusCode = 200;
    res.end('Hello ALX!');
  } else if (url === '/students') {
    const path = process.argv[2];
    countStudents(path)
      .then((report) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${report}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
