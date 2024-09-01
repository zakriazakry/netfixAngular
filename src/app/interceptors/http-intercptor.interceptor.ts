import { async } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { appHttpHeader } from '../shared/httpheader';
import { EncryptionService } from '../services/encryption.service';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  const modifiedReq = req.clone({
    headers: appHttpHeader
  });
  return next(modifiedReq).pipe(
    tap({
      next: (event) => {
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status >= 500) {
        router.navigate(["errors", "server"], {
          replaceUrl: true, state: {
            'isInterceptor': true
          }
        });
      } else if (error.status === 401) {
        auth.logout();
      } else if (error.status === 403) {
        //
        router.navigate(["errors", "forbidden"], {
          replaceUrl: true, state: {
            'isInterceptor': true
          }
        });
      }
      throw error;
    })
  );
};
