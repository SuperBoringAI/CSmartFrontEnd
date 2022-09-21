import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from "../../interface/employee";
import { Address } from 'src/app/interface/address';
import { Contract } from "../../interface/contract";

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  employeeForm!: UntypedFormGroup;
  formMessage: string = "";
  fieldMessage: string = "";

  address: Address = {
    addressId: "",
    county: this.fieldMessage,
    locality: this.fieldMessage,
    street: this.fieldMessage,
    streetNumber: this.fieldMessage,
    blockNumber: this.fieldMessage,
    stairNumber: this.fieldMessage,
    floor: 0,
    apartmentNumber: 0
  }
  contract: Contract = {
    contractId: "",
    contractType: this.fieldMessage,
    workHoursPerDay: 0,
    legalDaysOff: 0,
    brutSalary: 0.0
  }
  employee: Employee = {
    employeeId: "",
    firstName: this.fieldMessage,
    lastName: this.fieldMessage,
    cnp: this.fieldMessage,
    role: this.fieldMessage,
    studies: this.fieldMessage,
    employmentDate: this.fieldMessage,
    address: this.address,
    contract: this.contract
  }

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.buildEmployeeForm();
  }

  buildEmployeeForm() {
    this.employeeForm = new UntypedFormGroup({
      firstName: new UntypedFormControl("firstName", [Validators.required]),
      lastName: new UntypedFormControl("lastName", [Validators.required]),
      cnp: new UntypedFormControl("cnp", [Validators.required]),
      role: new UntypedFormControl("role", [Validators.required]),
      studies: new UntypedFormControl("studies", [Validators.required]),
      employmentDate: new UntypedFormControl("employmentDate", [Validators.required]),
      apartmentNumber: new UntypedFormControl("apartmentNumber", [Validators.required]),
      contractType: new UntypedFormControl("contractType", [Validators.required]),
      workHoursPerDay: new UntypedFormControl("workHoursPerDay", [Validators.required]),
      legalDaysOff: new UntypedFormControl("legalDaysOff", [Validators.required]),
      brutSalary: new UntypedFormControl("brutSalary", [Validators.required]),
      county: new UntypedFormControl("county", [Validators.required]),
      locality: new UntypedFormControl("locality", [Validators.required]),
      street: new UntypedFormControl("street", [Validators.required]),
      streetNumber: new UntypedFormControl("streetNumber", [Validators.required]),
      blockNumber: new UntypedFormControl("blockNumber", [Validators.required]),
      stairNumber: new UntypedFormControl("stairNumber", [Validators.required]),
      floor: new UntypedFormControl("floor", [Validators.required])
    });
  }

  submitEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.addNewEmployee(this.employee).subscribe(() => {
        window.location.reload();
        console.log("Employee added");
      });
      this.formMessage = "Your employee has been saved";
    }
    else {
      console.log('Not good')
    }
  }
}
