import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if (auth.isAuth()) {
    return true;
  }
  router.navigate(['/']);
  return false;
};

export const isNotAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if (auth.isAuth()) {
  router.navigate(['/home']);
  return false;
  }
  return true;
};
