import {Component, OnInit} from '@angular/core';
import {CafeService} from '../../sevices/cafe.service';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Cafe} from '../../entity/Cafe';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {Employee} from '../../entity/Employee';
import {EmployeeService} from '../../sevices/employee.service';
import {EmployeeEditComponent} from '../employee-edit/employee-edit.component';
import {CafeAddComponent} from "../../cafe/cafe-add/cafe-add.component";
import {EmployeeAddComponent} from "../employee-add/employee-add.component";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  cafes: Cafe[];

  constructor(private employeeService: EmployeeService,
              private cafeService: CafeService,
              private authService: AuthenticationService,
              private matDialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
    this.getCafes();
  }

  private getEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    }, error => {
      if (error.status === 401) {
        this.router.navigate(['']);
      }
    });
  }

  private getCafes(): void {
    this.cafeService.getCafes().subscribe(data => {
      this.cafes = data;
    }, error => {
      if (error.status === 401) {
        this.router.navigate(['']);
      }
    });
  }

  userLogout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  // tslint:disable-next-line:typedef
  updateEmployee(id: number) {
    debugger;
    const dialogRef = this.matDialog.open(EmployeeEditComponent, {
      hasBackdrop: true,
      data: {employeeData: this.findEmployeeById(id), cafeData: this.cafes }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getEmployees();
      this.getCafes();
      this.matDialog.closeAll();
    });
  }

  private findEmployeeById(id: number): Employee {
    // tslint:disable-next-line:triple-equals
    debugger;
    return this.employees.filter(employee => employee.idEmployee === id)[0];
  }

  addEmployee(): void {
    const dialogRef = this.matDialog.open(EmployeeAddComponent, {
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCafes();
      this.matDialog.closeAll();
    });
  }

  deleteEmployee(id: number): void {
    debugger;
    this.employeeService.deleteService(id)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }
}
