import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EmployeeNewComponent } from './component/employee-new/employee-new.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'employees',
    component:EmployeeComponent
  },
  {
    path:'newEmployee',
    component:EmployeeNewComponent
  },
  {
    path:'editEmployee/:employeeId',
    component:EmployeeUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
