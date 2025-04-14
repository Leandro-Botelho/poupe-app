import { Validators } from '@angular/forms';

export const LoginValidators = {
  email: [Validators.required, Validators.email, Validators.minLength(5)],
  password: [Validators.required, Validators.minLength(5)],
};
