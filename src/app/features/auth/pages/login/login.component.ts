import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardContainerComponent } from '../../components/card-container/card-container.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginFormTitleComponent } from '../../components/loginFormTitle/loginFormTitle.component';
import { LoginValidators } from './validator/login.validator';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CardContainerComponent,
    MatIconModule,
    MatButtonModule,
    LoginFormTitleComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  hide = true;

  constructor(private _fb: FormBuilder) {
    this.loginFormGroup = this._fb.group({
      email: LoginValidators.email,
      password: LoginValidators.password,
    });
  }

  get email() {
    return this.loginFormGroup.get('email') as FormControl;
  }
  get password() {
    return this.loginFormGroup.get('password') as FormControl;
  }

  showPassword() {
    this.hide = !this.hide;
  }

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Form submitted:', this.loginFormGroup.value);
  }
}
