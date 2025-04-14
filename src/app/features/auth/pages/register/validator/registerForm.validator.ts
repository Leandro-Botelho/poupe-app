import { Validators } from '@angular/forms';
import { MinDateValidator } from './minDate.validator';

export const RegisterValidators = {
  email: [Validators.required, Validators.email, Validators.minLength(5)],
  name: [Validators.required, Validators.minLength(5)],
  dateOfBirth: [
    Validators.required,
    Validators.minLength(10),
    MinDateValidator(),
  ],
  password: [Validators.required, Validators.minLength(5)],
};
