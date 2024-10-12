/**
* Definition of interfaces
*/
// Define Director Interface
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
  }

// Define Teacher Interface
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
  }

// Implement class Director from DirectorInterface
export class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

// implement class Teacher from TeacherInterface
export class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

// Define interface for function createEmployee
export interface createEmployeeInterface {
  (salary: number | string): TeacherInterface | DirectorInterface;
}

export function createEmployee(salary: number | string) {
  if ((typeof salary === 'number') && salary < 500) {
    return new Teacher;
  }
  return new Director;
}



export function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
  }

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// String literal Type
export type Subject = 'Math' | 'History';

// Define function teachClass
export function teachClass(todayClass: Subject): string {
  return todayClass == 'Math' ? 'Teaching Math' : 'Teaching History';
}
 
