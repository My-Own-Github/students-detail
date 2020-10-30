import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentEditFormComponent } from './components/student-edit-form/student-edit-form.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  {
    path: 'studentForm', component: StudentFormComponent
  },
  {
    path: '', redirectTo: '/studentForm', pathMatch: 'full'
  },
  {
    path: 'studentsList', component: StudentsListComponent,
  },
  {
    path: 'studentEditForm', component: StudentEditFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
