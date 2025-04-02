import { Routes } from '@angular/router';
import { OnboardingComponent } from './features/onboarding/onboarding.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { AUTH_ROUTES } from './features/auth/auth.routes';

export const routes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
  },
  {
    path: 'auth',
    children: AUTH_ROUTES,
  },
];
