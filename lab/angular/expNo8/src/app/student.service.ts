import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students = [
    { id: 1, name: 'Rahul', age: 20 },
    { id: 2, name: 'Priya', age: 21 },
    { id: 3, name: 'Amit', age: 22 }
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find(student => student.id === id);
  }
}