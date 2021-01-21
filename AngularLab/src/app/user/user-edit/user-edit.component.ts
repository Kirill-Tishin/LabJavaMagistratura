import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../entity/User';
import {UserService} from '../../sevices/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  users: User[];
  user: User;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<UserEditComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
    debugger;
    this.user = this.data.userData;
    this.inputField();
  }

  private inputField(): void {
    debugger;
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  onSubmit(): void {
    debugger;
    this.userService.updateUser(this.user).subscribe(data => {
      console.log(data);
      this.matDialogRef.close(data);
    }, error => console.log(error));
  }
}
