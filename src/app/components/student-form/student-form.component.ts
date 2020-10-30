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

  constructor(public fb: FormBuilder,
    private router: Router,
    private studentServiceService : StudentServiceService) { }

  ngOnInit() {
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

  saveUserData(form: any) {
    console.log("user form", form)
    this.studentServiceService.setStudentDetail(form.value);
    this.router.navigate(["studentsList"])
  }

}
