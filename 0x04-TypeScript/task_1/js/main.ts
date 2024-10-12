/**
* This file defines interface for various objects
*/


export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
  };

// Director interface described
export interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacherFunction interface defined
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// The Student Class Interface definition
export interface StudentClassConstructorInterface {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string
}

// StudentClass implementation
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = () => 'Currently working';
  displayName = () => this.firstName;
}

export const printTeacher = (firstName: string, lastName: string) => `${firstName[0]}. ${lastName}`
