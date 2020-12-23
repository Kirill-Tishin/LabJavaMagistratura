import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login: string;
  password: string;
  errorMessage = 'Неверный логин или пароль';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleLogin(){
    debugger;
    this.authenticationService.authenticate(this.login, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/cafe_list']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
