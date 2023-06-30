import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userRegister } from 'src/app/types/userRegister';
import { token } from 'src/app/types/token';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  jwt: token | null = null; // Initialize jwt as null
  loginUser = {
    email: '',
    password: '',
  };

  Login() {
    this.http
      .post<userRegister>(
        'http://localhost:8080/api/v1/auth/login',
        this.loginUser
      )
      .subscribe(
        (res) => {
          this.jwt = { token: res.token }; // Extract the token from the response and assign it to jwt
          alert('Login successful');
        },
        (error) => {
          alert('Error occurred during login');
        }
      );
  }

  getDataWithToken() {
    if (this.jwt && this.jwt.token) {
      // Construct the Authorization header with the token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwt.token}`,
      });

      // Make the GET request with the token as an Authorization header
      this.http
        .get('http://localhost:8080/api/v1/some-endpoint', { headers })
        .subscribe(
          (data) => {
            console.log('Data with token:', data);
          },
          (error) => {
            console.error(
              'Error occurred during GET request with token:',
              error
            );
          }
        );
    } else {
      console.error('Token is not available.');
    }
  }
}
