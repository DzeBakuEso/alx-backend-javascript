// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const db = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students';
      const fields = Object.keys(db).sort();
      for (const field of fields) {
        response += `\nNumber of students in ${field}: ${db[field].length}. List: ${db[field].join(', ')}`;
      }
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const db = await readDatabase(process.argv[2]);
      const names = db[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
