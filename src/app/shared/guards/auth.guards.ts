import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastService } from '../service/toast/toast.service';

export const authGuard: CanActivateFn = (): boolean => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const toast = inject(ToastService);

  if (token) return true;

  toast.showMessage(
    'Você precisa estar logado para acessar essa página',
    'error',
    5000
  );
  router.navigate(['/auth/login']);
  return false;
};
