import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
