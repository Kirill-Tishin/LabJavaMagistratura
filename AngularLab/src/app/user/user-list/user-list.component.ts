import {Component, OnInit} from '@angular/core';
import {Product} from '../../entity/Product';
import {ProductService} from '../../sevices/product.service';
import {AuthenticationService} from '../../authentication/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ProductEditComponent} from '../../product/product-edit/product-edit.component';
import {User} from '../../entity/User';
import {UserService} from '../../sevices/user.service';
import {UserEditComponent} from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
              private authService: AuthenticationService,
              private matDialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    debugger;
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      if (error.status === 401) {
        this.router.navigate(['']);
      }
    });
  }

  deleteUser(id: number): void {
  }

  userLogout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  // tslint:disable-next-line:typedef
  updateUser(id: number) {
    debugger;
    const dialogRef = this.matDialog.open(UserEditComponent, {
      hasBackdrop: true,
      data: {userData: this.findUserById(id)}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  private findUserById(id: number): User {
    debugger;
    // tslint:disable-next-line:triple-equals
    return this.users.filter(user => user.idUser === id)[0];
  }

  addUser(): void{
  }
}
