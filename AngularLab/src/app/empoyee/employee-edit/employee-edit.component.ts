import {Component, Inject, OnInit} from '@angular/core';
import {Cafe} from '../../entity/Cafe';
import {Employee} from '../../entity/Employee';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';
import {EmployeeService} from '../../sevices/employee.service';
import {CafeService} from '../../sevices/cafe.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  cafes: Cafe[];
  cafeId: string;
  employee: Employee;
  employeeId: string;
  employees: Employee[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<EmployeeEditComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private employeeService: EmployeeService,
              private cafeService: CafeService
  ) {
  }

  ngOnInit(): void {
    debugger;
    this.employee = this.data.employeeData;
    this.employeeId = this.employee.idEmployee.toString();
    this.cafes = this.data.cafeData;
    this.inputField();
  }

  private inputField(): void {
    debugger;
    this.cafeService.getCafes().subscribe(data => this.cafes = data);
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  private chooseCafe(id: string): Cafe {
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    return this.cafes.filter(cafe => cafe.idCafe == id)[0];
  }

  onSubmit(): void {
    debugger;
    this.employee.cafe = this.chooseCafe(this.cafeId);
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.matDialogRef.close(data);
    }, error => console.log(error));
  }
}
