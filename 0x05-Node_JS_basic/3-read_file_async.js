const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length < 2) {
        resolve();
        return;
      }

      const headers = lines[0].split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');
      const studentsByField = {};

      for (let i = 1; i < lines.length; i += 1) {
        const row = lines[i].split(',');
        const field = row[fieldIndex];
        const firstName = row[firstNameIndex];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }

      const totalStudents = Object.values(studentsByField)
        .reduce((acc, val) => acc + val.length, 0);

      console.log(`Number of students: ${totalStudents}`);
      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          const list = studentsByField[field].join(', ');
          console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${list}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
