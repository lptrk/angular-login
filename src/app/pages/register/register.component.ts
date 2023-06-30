import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, ElementRef } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { RegisterService } from 'src/app/auth/register/register.service';
import { userRegister } from 'src/app/types/userRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  jwt: any;
  firstName = new FormControl();
  lastName = new FormControl();
  username = new FormControl();
  email = new FormControl();
  password = new FormControl();
  constructor(
    public registerService: RegisterService,
    public http: HttpClient,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    this.registerService.registerUser.firstName = this.firstName.value;
    this.registerService.registerUser.lastName = this.lastName.value;
    this.registerService.registerUser.userName = this.username.value;
    this.registerService.registerUser.email = this.email.value;
    this.registerService.registerUser.password = this.password.value;
    this.registerService.registerUser.createdAt = new Date();
    this.registerService.registerUser.updatedAt = new Date();
    this.registerService.getJwt();
    this.router.navigate(['/login']);
  }
}
