import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../entity/User";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AuthenticationService} from "../../authentication/authentication.service";
import {Router} from "@angular/router";
import {UserService} from "../../sevices/user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user = new User();
  name: string;
  password: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<UserAddComponent>,
              private authService: AuthenticationService,
              private router: Router,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  private inputField(): void {
  }

  onSubmit(): void {
    debugger;
    this.user.name = this.name;
    this.user.password = this.password;
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.matDialogRef.close(data);
    }, error => console.log(error));
  }
}
