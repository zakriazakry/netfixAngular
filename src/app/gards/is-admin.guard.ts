import { CanActivateFn } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  if (state) {

  }
  return true;
};
