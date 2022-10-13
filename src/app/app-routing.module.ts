import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EmployeeComponent } from './component/employee-individual/employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeNewComponent } from './component/employee-new/employee-new.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'employeeList',
    component:EmployeeListComponent
  },
  {
    path:'newEmployee',
    component:EmployeeNewComponent
  },
  {
    path:'editEmployee/:employeeId',
    component:EmployeeUpdateComponent
  },
  // {
  //   path:'invoiceIns',
  //   component:InvoiceInComponent
  // },

  // {
  //   path:'providers',
  //   component:ProviderComponent
  // },
  // {
  //   path:'newProvider',
  //   component:ProviderNewComponent
  // },
  // {
  //   path:'editProvider/:providerId',
  //   component:ProviderUpdate
  // },

  // {
  //   path:'workingPoints',
  //   component:WorkingPointComponent
  // },
  // {
  //   path:'newWorkingPoint',
  //   component:WorkingPointNewComponent
  // },
  // {
  //   path:'editWorkingPoint/:workingPointId',
  //   component:WorkingPointUpdateComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
