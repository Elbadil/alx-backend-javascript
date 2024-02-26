const fs = require('fs');

function countStudents(filePath) {
  // let counter = 0;
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }
    const studentData = [];
    const fields = {};
    const lines = data.split('\n');
    const lastElement = lines.slice(-1);
    /** Deleting the first line */
    lines.splice(0, 1);
    /** Deleting the last line if empty */
    if (lastElement.length < 2) {
      lines.pop();
    }
    lines.forEach((line) => {
      const elements = line.split(',');
      studentData.push({
        firstName: elements[0],
        lastName: elements[1],
        age: elements[2],
        field: elements[3],
      });
    });
    for (const student of studentData) {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstName);
    }
    console.log(`Number of students: ${studentData.length}`);
    for (const field in fields) {
      if (fields[field]) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
