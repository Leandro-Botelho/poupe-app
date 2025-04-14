import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css',
})
export class OnboardingComponent {}
