import { FormControl, FormGroup } from '@angular/forms';

export interface userRegister {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
