import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // if (!!localStorage.getItem('token')) {
    return true;
  // // }
  // router.navigate(['/']);
  // return false;
};
