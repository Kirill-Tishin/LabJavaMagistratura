import {Component, Inject, OnInit} from '@angular/core';
import {Cafe} from "../../entity/Cafe";
import {Employee} from "../../entity/Employee";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AuthenticationService} from "../../authentication/authentication.service";
import {Router} from "@angular/router";
import {EmployeeService} from "../../sevices/employee.service";
import {CafeService} from "../../sevices/cafe.service";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee = new Employee();
  name: string;
  firstName: string;
  telephone: string;
  cafeId: number;
  cafes: Cafe[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<EmployeeAddComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private employeeService: EmployeeService,
              private cafeService: CafeService
  ) {
  }

  ngOnInit(): void {
    this.fillCafe();
  }

  onSubmit(): void {
    this.createEmployee();
  }

  private fillCafe(): void{
    debugger;
    this.cafeService.getCafes().subscribe(data => this.cafes = data);
  }
  private chooseCafe(id: number): Cafe {
    // tslint:disable-next-line:no-debugger
    debugger;
    // tslint:disable-next-line:triple-equals
    return this.cafes.filter(cafe => cafe.idCafe == id)[0];
  }

  private createEmployee(): void {
    debugger;
    this.employee.name = this.name;
    this.employee.firstName = this.firstName;
    this.employee.telephone = this.telephone;
    this.employee.cafe = this.chooseCafe(this.cafeId);
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(['employees']);
    }, error => console.log(error));
  }
}
