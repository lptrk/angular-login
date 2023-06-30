import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/auth/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = new FormControl();
  password = new FormControl();
  constructor(private loginService: LoginService) {}

  onSubmit(form: NgForm) {
    this.loginService.loginUser.email = this.email.value;
    this.loginService.loginUser.password = this.password.value;
    this.loginService.Login();
  }
}
