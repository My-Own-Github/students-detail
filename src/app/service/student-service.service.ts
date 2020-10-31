import { Injectable } from '@angular/core';
import { StudentForm } from '../shared/student-form.model';
import { Student } from '../shared/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  studentsList: any;
  constructor() {
  }

  setStudentDetail(student: Student) {
    let studentListLS = JSON.parse(localStorage.getItem('studentList'))
    if (!this.studentsList && !studentListLS) {
      this.studentsList = [];
      this.studentsList.push(student)
    } else {
      this.studentsList = studentListLS;
      this.studentsList.push(student)
    }
    localStorage.setItem("studentList", JSON.stringify(this.studentsList))
  }

  getstudentdetail() {
    return JSON.parse(localStorage.getItem('studentList'));
  }

  updateStudentDetail(student: Student, index){
    let studentListLS = JSON.parse(localStorage.getItem('studentList'))
    studentListLS[index] = student;
    this.studentsList = studentListLS;
    localStorage.setItem("studentList", JSON.stringify(this.studentsList))
  }

  removedStudentDetail(index){
    let studentListLS = JSON.parse(localStorage.getItem('studentList'))
    studentListLS.splice(index, 1)
    // studentListLS = updatedStudentListLS;
    this.studentsList = studentListLS;
    localStorage.setItem("studentList", JSON.stringify(this.studentsList))
  }
}
