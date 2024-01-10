interface Student{
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Adel',
  lastName: 'Elb',
  age: 26,
  location: 'Tetouan, Morocco'
}

const student2: Student = {
  firstName: 'Haitam',
  lastName: 'Elb',
  age: 22,
  location: 'Tetouan, Morocco'
}

const studentList: Student[] = [student1, student2];

// Redering a Table with Vanilla JavaScript
const table = document.createElement('table');
const tableBody = document.createElement('tableBody');

table.appendChild(tableBody);

// Appending new rows to the table
studentList.forEach((student: Student): void => {
  const tableRows = document.createElement('tr');
  const studentName = document.createElement('td');
  const studentLocation = document.createElement('td');

  studentName.textContent = student.firstName;
  studentLocation.textContent = student.location;

  tableRows.appendChild(studentName);
  tableRows.appendChild(studentLocation);
  table.appendChild(tableRows);
});

document.body.appendChild(table);
