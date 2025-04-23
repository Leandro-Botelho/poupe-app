import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RegisterValidatorService } from './service/registerValidator.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { FormAuthComponent } from '../../components/form-auth/form-auth.component';
import { Router } from '@angular/router';
import { RegisterService } from './service/register.service';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { ToastService } from '../../../../shared/service/toast/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    FormAuthComponent,
    LoadingComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideNativeDateAdapter(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
})
export class RegisterComponent {
  hide = signal(true);
  isLoading = signal(false);

  constructor(
    private readonly registerValidatorService: RegisterValidatorService,
    private readonly router: Router,
    private readonly registerService: RegisterService,
    private readonly toastService: ToastService
  ) {}

  get registerForm() {
    return this.registerValidatorService;
  }

  onSubmit(): void {
    if (!this.registerValidatorService.registerFormGroup.valid) return;

    this.isLoading.update(() => true);

    const credentials = {
      email: this.registerValidatorService.registerFormGroup.value.email,
      password: this.registerValidatorService.registerFormGroup.value.password,
      name: this.registerValidatorService.registerFormGroup.value.name,
      dateOfBirth:
        this.registerValidatorService.registerFormGroup.value.dateOfBirth,
    };

    this.registerService.register(credentials).subscribe({
      next: () => {
        this.toastService.showMessage(
          'Usuário cadastrado com sucesso!',
          'success'
        );
        this.isLoading.update(() => false);
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.isLoading.update(() => false);
        console.error(error);
      },
    });
  }

  showPassword() {
    this.hide.update((prev) => !prev);
  }
}
