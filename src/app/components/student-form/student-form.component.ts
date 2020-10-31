import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { StudentServiceService } from '../../service/student-service.service';
import { StudentForm } from '../../shared/student-form.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  studentData: any;

  constructor(public fb: FormBuilder,
    private router: Router,
    private studentServiceService : StudentServiceService) { }

  ngOnInit() {
    this.studentData = history.state.data;
    if (this.studentData) {
      this.updateStudentData(this.studentData)
    }
  }

  studentForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    mobileNo: ['', Validators.compose([
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.required])]
  });

  updateStudentData(studentData: any) {
    let student = studentData.student;
    this.studentForm.controls['firstName'].setValue(student.firstName)
    this.studentForm.controls['lastName'].setValue(student.lastName)
    this.studentForm.controls['email'].setValue(student.email)
    this.studentForm.controls['mobileNo'].setValue(student.mobileNo)
  }

  saveStudentData(form: any) {
    if(!this.studentData){
      this.studentServiceService.setStudentDetail(form.value);
    } else{
      this.studentServiceService.updateStudentDetail(form.value, this.studentData.index);
    }
    this.router.navigate(["studentsList"])
  }

  goToBack(){
    this.router.navigate(["/studentForm"])
  }

}
