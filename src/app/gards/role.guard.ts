import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EncryptionService } from '../services/encryption.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const encryptionService = inject(EncryptionService);
  const userRolesStr = encryptionService.decrypt(<string>localStorage.getItem('roles'));
  const userRoles = <number[]>JSON.parse(userRolesStr);

  const hasAccess = userRoles.some(role => route.data['roles'].includes(role));
  if (hasAccess) {
    return true;
  }
  router.navigateByUrl('/auth/login', {
    replaceUrl: true
  });
  return false;
};
