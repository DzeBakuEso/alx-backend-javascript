// full_server/utils.js
import { readFile } from 'fs/promises';

export function readDatabase(filePath) {
  return readFile(filePath, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n').filter((line) => line.trim());
      lines.shift(); // Remove header
      const db = {};
      for (const line of lines) {
        const [firstname, , , field] = line.split(',');
        if (!db[field]) db[field] = [];
        db[field].push(firstname);
      }
      return db;
    });
}
