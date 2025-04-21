import { Routes } from '@angular/router';
import { MainComponent } from '../main.component';
import { authGuard } from '../../../shared/guards/auth.guards';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'transactions',
        loadComponent: () =>
          import('../pages/transactions/transactions.component').then(
            (m) => m.TransactionsComponent
          ),
      },
      {
        path: '',
        loadComponent: () =>
          import('../pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
    ],
  },
];
