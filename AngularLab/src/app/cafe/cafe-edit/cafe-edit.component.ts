import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Cafe} from '../../entity/Cafe';
import {Employee} from '../../entity/Employee';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';
import {EmployeeEditComponent} from '../../empoyee/employee-edit/employee-edit.component';
import {CafeService} from '../../sevices/cafe.service';
import {EmployeeService} from '../../sevices/employee.service';

@Component({
  selector: 'app-cafe-edit',
  templateUrl: './cafe-edit.component.html',
  styleUrls: ['./cafe-edit.component.css']
})
export class CafeEditComponent implements OnInit {

  cafe: Cafe;
  cafeId: string;
  employees: Employee[];
  employeeForCafe: Employee[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<CafeEditComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private employeeService: EmployeeService,
              private cafeService: CafeService
              ) { }

  ngOnInit(): void {
    this.cafe = this.data.cafeData;
    this.cafeId = this.cafe.idCafe.toString();
    this.inputField();
  }

  private inputField(): void {
  }

  private findEmployeeById(id: number): Employee {
    // tslint:disable-next-line:triple-equals
    return this.employees.filter(employee => employee.idEmployee === id)[0];
  }

  onSubmit(): void {
    debugger;
    this.cafeService.updateCafe(this.cafe).subscribe(data => {
      console.log(data);
      this.matDialogRef.close(data);
    }, error => console.log(error));
  }
}
