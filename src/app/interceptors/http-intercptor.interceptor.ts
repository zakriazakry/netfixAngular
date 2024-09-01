import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Interceptor triggered...");
  const router = inject(Router);
  const auth = inject(AuthService);
  return next(req).pipe(
    tap({
      next: (res : any) => {
        // Error Caption
        // Error Server
        if(res.status >= 500){
          router.navigateByUrl("errors/server")
          return;
        }
        console.log("---------------");
        console.log(res.status);
        console.log("---------------");
      },
      error: (err) => {
        console.error("Error in interceptor:", err);
      }
    })
  );
};
