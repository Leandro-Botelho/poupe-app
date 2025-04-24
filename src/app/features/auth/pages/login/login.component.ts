import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginValidatorService } from './service/loginValidator.service';
import { Router } from '@angular/router';
import { FormAuthComponent } from '../../components/form-auth/form-auth.component';
import { AuthService } from '../../../../shared/service/auth/auth.service';
import { LoadingService } from '../../../../shared/service/loading/loading.service';
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
export class LoginComponent implements OnDestroy {
  hide = signal(true);

  constructor(
    private readonly loginValidatorService: LoginValidatorService,
    private readonly authService: AuthService,
    private router: Router,
    private readonly loadingService: LoadingService
  ) {}

  get loginForm() {
    return this.loginValidatorService;
  }

  showPassword() {
    this.hide.update((prev) => !prev);
  }

  onSubmit(): void {
    if (!this.loginForm.loginFormGroup.valid) return;

    this.loadingService.show();

    const credentials = {
      email: this.loginForm.loginFormGroup.value.email,
      password: this.loginForm.loginFormGroup.value.password,
    };

    this.authService.auth(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.loadingService.hide();
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed', error);
      },
    });
  }

  ngOnDestroy(): void {
    this.loginForm.loginFormGroup.reset();
  }
}
