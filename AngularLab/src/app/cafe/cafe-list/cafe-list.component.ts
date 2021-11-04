import {Component, OnInit} from '@angular/core';
import {CafeService} from '../../sevices/cafe.service';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Cafe} from '../../entity/Cafe';
import {Router} from '@angular/router';
import {CafeEditComponent} from '../cafe-edit/cafe-edit.component';
import {MatDialog} from '@angular/material/dialog';
import {CafeAddComponent} from '../cafe-add/cafe-add.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafesList: Observable<Cafe[]>;
  cafes: Cafe[];

  constructor(private cafeService: CafeService,
              private authService: AuthenticationService,
              private matDialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCafes();
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
  updateCafe(id: number) {
    const dialogRef = this.matDialog.open(CafeEditComponent, {
      hasBackdrop: true,
      data: {cafeData: this.findCafeById(id)}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCafes();
      this.matDialog.closeAll();
    });
  }

  private findCafeById(id: number): Cafe {
    // tslint:disable-next-line:triple-equals
    return this.cafes.filter(cafe => cafe.idCafe === id)[0];
  }

  addCafe(): void {
    const dialogRef = this.matDialog.open(CafeAddComponent, {
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCafes();
      this.matDialog.closeAll();
    });
  }

  deleteCafe(id: number): void {
    debugger;
    this.cafeService.deleteCafe(id)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }
}
