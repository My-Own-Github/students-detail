import { Injectable } from '@angular/core';
import { StudentForm } from '../shared/student-form.model';
import { Student } from '../shared/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  studentsList = [];
  constructor() {
  }

  setStudentDetail(student: Student){
   this.studentsList.push(student)
  }

  getstudentdetail(){
    return this.studentsList;
  }
}
