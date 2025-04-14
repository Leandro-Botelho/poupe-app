import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginFormTitleComponent } from '../../components/loginFormTitle/loginFormTitle.component';
import { LoginValidatorService } from './service/loginValidator.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/service/auth/auth.service';
import { FormAuthComponent } from '../../components/form-auth/form-auth.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FormAuthComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(
    private readonly loginValidatorService: LoginValidatorService,
    private readonly authService: AuthService,
    private router: Router
  ) {}

  get loginForm() {
    return this.loginValidatorService;
  }

  showPassword() {
    this.hide = !this.hide;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Login form submitted');
    // if (!this.loginForm.loginFormGroup.valid) return;

    // const credentials = {
    //   email: this.loginForm.loginFormGroup.value.email,
    //   password: this.loginForm.loginFormGroup.value.password,
    // };

    // this.authService.login();
  }
}
