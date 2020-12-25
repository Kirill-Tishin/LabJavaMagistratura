import {Component, Inject, OnInit} from '@angular/core';
import {Cafe} from '../../entity/Cafe';
import {Employee} from '../../entity/Employee';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';
import {EmployeeService} from '../../sevices/employee.service';
import {CafeService} from '../../sevices/cafe.service';

@Component({
  selector: 'app-cafe-add',
  templateUrl: './cafe-add.component.html',
  styleUrls: ['./cafe-add.component.css']
})
export class CafeAddComponent implements OnInit {

  cafe = new Cafe();

  title: string;
  address: string;
  telephone: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<CafeAddComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private employeeService: EmployeeService,
              private cafeService: CafeService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.createCafe();
  }

  private createCafe(): void {
    this.cafe.title = this.title;
    this.cafe.address = this.address;
    this.cafe.telephone = this.telephone;

    this.cafeService.createCafe(this.cafe).subscribe(data => {
      console.log(data);
      this.router.navigate(['cafes']);
    });

  }

  userLogout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
