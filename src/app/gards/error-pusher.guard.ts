import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const errorPusherGuard: CanActivateFn = (route, state) => {
  const navigationState = history.state as { isInterceptor?: boolean };
const router = inject(Router);
  const isNormalRoute = (navigationState.isInterceptor ?? !true) === true;

  if (isNormalRoute) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
