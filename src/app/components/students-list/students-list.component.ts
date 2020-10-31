import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  studentsList: any[];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobileNo', 'actions'];
  constructor(
    private studentServiceService: StudentServiceService,
    private router: Router) { }

  ngOnInit() {
    this.studentsList = this.studentServiceService.getstudentdetail();
  }

  updateStudentDetail(studentData, index) {
    this.router.navigate(["/studentForm"], { state: { "data": {"student": studentData, "index": index} } });
  }

  deleteStudentData(index){
    this.studentServiceService.removedStudentDetail(index);
    this.studentsList = this.studentServiceService.getstudentdetail();
  }

  openStudentForm(){
    this.router.navigate(["/studentForm"])
  }

}
