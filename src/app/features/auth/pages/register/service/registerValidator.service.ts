import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterValidators } from '../validator/registerForm.validator';

@Injectable({
  providedIn: 'root',
})
export class RegisterValidatorService {
  private registerValidatorGroup: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.registerValidatorGroup = _formBuilder.group({
      name: ['', RegisterValidators.name],
      email: ['', RegisterValidators.email],
      dateOfBirth: ['', RegisterValidators.dateOfBirth],
      password: ['', RegisterValidators.password],
    });
  }

  get registerFormGroup(): FormGroup {
    return this.registerValidatorGroup;
  }
  get name() {
    return this.registerValidatorGroup.get('name');
  }
  get email() {
    return this.registerValidatorGroup.get('email');
  }
  get dateOfBirth() {
    return this.registerValidatorGroup.get('dateOfBirth');
  }
  get password() {
    return this.registerValidatorGroup.get('password');
  }
}
