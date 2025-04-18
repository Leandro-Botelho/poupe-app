import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginFormTitleComponent } from '../../components/loginFormTitle/loginFormTitle.component';
import { RegisterValidatorService } from './service/registerValidator.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormAuthComponent } from '../../components/form-auth/form-auth.component';

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
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class RegisterComponent implements OnInit {
  hide = true;

  constructor(
    private readonly registerValidatorService: RegisterValidatorService
  ) {}

  ngOnInit(): void {}

  get registerForm() {
    return this.registerValidatorService;
  }

  onSubmit(): void {
    console.log(
      this.registerValidatorService.registerFormGroup.value.dateOfBirth
    );
  }

  showPassword() {
    this.hide = !this.hide;
  }
}
