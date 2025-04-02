import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CardContainerComponent } from '../../components/card-container/card-container.component';
import { LoginFormTitleComponent } from '../../components/loginFormTitle/loginFormTitle.component';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  hide = false;

  onSubmit(): void {}

  showPassword() {
    this.hide = !this.hide;
  }
}
