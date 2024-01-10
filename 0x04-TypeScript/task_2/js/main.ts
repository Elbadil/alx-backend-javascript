interface DirectorInterface {
  workFromHome: () => string,
  getCoffeeBreak: () => string,
  workDirectorTasks: () => string
}

interface TeacherInterface {
  workFromHome: () => string,
  getCoffeeBreak: () => string,
  workTeacherTasks: () => string
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak (): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

const createEmployee = (salary: number | string) => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Creating functions specific to employees
function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

const executeWork = (employee: Director | Teacher) =>  {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
};

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// String literal types
type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

