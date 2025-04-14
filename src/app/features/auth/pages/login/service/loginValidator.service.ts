import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginValidators } from '../validator/login.validator';

@Injectable({
  providedIn: 'root',
})
export class LoginValidatorService {
  private loginValidatorGroup: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.loginValidatorGroup = _formBuilder.group({
      email: ['', LoginValidators.email],
      password: ['', LoginValidators.password],
    });
  }

  get loginFormGroup(): FormGroup {
    return this.loginValidatorGroup;
  }
  get email() {
    return this.loginValidatorGroup.get('email');
  }
  get password() {
    return this.loginValidatorGroup.get('password');
  }
}
