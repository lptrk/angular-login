import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userRegister } from 'src/app/types/userRegister';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(public http: HttpClient) {}
}
