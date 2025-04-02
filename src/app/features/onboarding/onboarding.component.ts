import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CardContainerComponent } from '../auth/components/card-container/card-container.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterLink, CardContainerComponent, MatIconModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css',
})
export class OnboardingComponent {}
