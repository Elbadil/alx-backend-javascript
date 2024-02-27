import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      let responseMessage = 'This is the list of our students';
      const studentData = await readDatabase(request.dbFile);
      for (const field in studentData) {
        if (studentData[field]) {
          responseMessage += `\nNumber of students in ${field}: ${studentData[field].length}. List: ${studentData[field].join(', ')}`;
        }
      }
      response.statusCode = 200;
      response.send(responseMessage);
    } catch (error) {
      response.statusCode = 500;
      response.send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const studentData = await readDatabase(request.dbFile);
      const { major } = request.params;
      if (major === 'CS' || major === 'SWE') {
        response.statusCode = 200;
        response.send(`List: ${studentData[major].join(', ')}`);
      }
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } catch (error) {
      response.statusCode = 500;
      response.send(error.message);
    }
  }
}
