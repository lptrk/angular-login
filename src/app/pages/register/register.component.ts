import { Component, ElementRef } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/auth/register/register.service';
import { userRegister } from 'src/app/types/userRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  firstName = new FormControl();
  lastName = new FormControl();
  username = new FormControl();
  email = new FormControl();
  password = new FormControl();
  constructor(public registerService: RegisterService) {}

  onSubmit(form: NgForm) {
    const registerUser: userRegister = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      userName: this.username.value,
      email: this.email.value,
      password: this.password.value,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
