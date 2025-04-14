import { Routes } from '@angular/router';
import { OnboardingComponent } from './features/onboarding/onboarding.component';
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
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/main/routes/main.routes').then((m) => m.MAIN_ROUTES),
  },
];
