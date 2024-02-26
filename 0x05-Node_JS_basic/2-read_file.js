const fs = require('fs');
const csv = require('csv-parser');

function countStudents(filePath) {
  const fields = {};
  let counter = 0;
  fs.createReadStream(filePath)
    .on('error', () => {
      throw new Error('Cannot load the database');
    })
    .pipe(csv())
    .on('data', (row) => {
      counter += 1;
      if (!fields[row.field]) {
        fields[row.field] = [];
      }
      fields[row.field].push(row.firstname);
    })
    .on('end', () => {
      console.log(`Number of students: ${counter}`);
      for (const field in fields) {
        if (fields[field]) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    });
}

module.exports = countStudents;
