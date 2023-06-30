import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userRegister } from 'src/app/types/userRegister';
import { FormControl } from '@angular/forms';
import { token } from 'src/app/types/token';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private http: HttpClient, private router: Router) {}

  jwt: token | null = null; // Initialize jwt as null or you can give it a default value

  registerUser = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  getJwt() {
    this.http
      .post<userRegister>(
        'http://localhost:8080/api/v1/auth/register',
        this.registerUser
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.jwt = { token: res.token }; // Extract the token from the response and assign it to jwt
          alert('Register successful');
        },
        (error) => {
          console.error('Error occurred during registration:', error);
        }
      );
  }
}
