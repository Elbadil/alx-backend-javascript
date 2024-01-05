export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeesNames = [];
  for (const key in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, key)) {
      const allTheEmployees = employees[key];
      for (const value of allTheEmployees) {
        employeesNames.push(value);
      }
    }
  }
  return employeesNames;
}
