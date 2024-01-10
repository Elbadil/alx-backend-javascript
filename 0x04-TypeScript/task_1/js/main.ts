// interface Teacher
interface Teacher{
  readonly firstName: string, // connet be changed outside the first declaration
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number, // optional
  location: string,
  [attrName: string]: any // add any attribute to the Object
}

// Extending the Teacher class
interface Directors extends Teacher{
  numberOfReports: number,
}

// printTeacherFunction interface
interface printTeacherFunction{
  (firstName: string, lastName: string): string,
}

// Printing teachers
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

// Writing a class StudentClass
interface classInterface {
  firstName: string,
  lastName: string,
  workOnHomework: () => string,
  displayName: () => string,
}

interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
  // ensuring that any instance created using such a constructor conforms
  // to the expected shape defined by classInterface
}

class StudentClass implements classInterface{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return `${this.firstName}`;
  }
}
