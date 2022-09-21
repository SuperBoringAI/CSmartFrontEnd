import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from "../../interface/employee";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employeeForm!: UntypedFormGroup;
  employeeId!: number;
  employee!: Employee;
  formMessage: string = '';

  constructor(public employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.employeeService.getEmployeeById(this.employeeId).subscribe((data: Employee) => {
      this.employee = data;
    })

    this.employeeForm = new UntypedFormGroup({
      firstName: new UntypedFormControl("firstName", [Validators.required]),
      lastName: new UntypedFormControl("lastName", [Validators.required]),
      cnp: new UntypedFormControl("cnp", [Validators.required]),
      role: new UntypedFormControl("role", [Validators.required]),
      studies: new UntypedFormControl("studies", [Validators.required]),
      employmentDate: new UntypedFormControl("employmentDate", [Validators.required]),
      county: new UntypedFormControl("county", [Validators.required]),
      locality: new UntypedFormControl("locality", [Validators.required]),
      street: new UntypedFormControl("street", [Validators.required]),
      streetNumber: new UntypedFormControl("streetNumber", [Validators.required]),
      blockNumber: new UntypedFormControl("blockNumber", [Validators.required]),
      stairNumber: new UntypedFormControl("stairNumber", [Validators.required]),
      floor: new UntypedFormControl("floor", [Validators.required]),
      apartmentNumber: new UntypedFormControl("apartmentNumber", [Validators.required]),
      contractType: new UntypedFormControl("contractType", [Validators.required]),
      workHoursPerDay: new UntypedFormControl("workHoursPerDay", [Validators.required]),
      legalDaysOff: new UntypedFormControl("legalDaysOff", [Validators.required]),
      brutSalary: new UntypedFormControl("brutSalary", [Validators.required])
    });
  }

  sendUpdateEmployeeRequest() {
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(() => {
        window.location.reload();
        console.log("Employee updated");
      });
    }
    else {
      this.formMessage = "Please update the product form before submitting";
    }
  }
}

