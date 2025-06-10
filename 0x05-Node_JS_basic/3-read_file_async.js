const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');
      const fieldIndex = headers.length - 1;

      const students = lines.slice(1).filter((line) => line.trim() !== '');
      const fieldData = {};

      for (const line of students) {
        const row = line.split(',');
        const field = row[fieldIndex];
        const firstname = row[0];

        if (!fieldData[field]) fieldData[field] = [];
        fieldData[field].push(firstname);
      }

      console.log(`Number of students: ${students.length}`);
      for (const field in fieldData) {
        const list = fieldData[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldData[field].length}. List: ${list}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
