const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, 'utf8', (err, data) => {
      if (err || !data) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));
      const fields = {};

      students.forEach((student) => {
        const field = student[3];
        const name = student[0];
        if (field && name) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(name);
        }
      });

      let output = `Number of students: ${students.length}`;
      for (const field in fields) {
        const list = fields[field].join(', ');
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${list}`;
      }

      resolve(output);
    });
  });
}

module.exports = countStudents;
