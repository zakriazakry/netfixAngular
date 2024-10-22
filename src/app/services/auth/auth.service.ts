import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { apiRes } from '../../interfaces/apiRes.interface';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { EncryptionService } from '../encryption.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  destoryRef = inject(DestroyRef);
  http = inject(HttpClient);
  router = inject(Router);
  constructor(
    private encryptionService: EncryptionService
  ) {

  }
  isAuth(): boolean {
    // and check the token is Exist in database
    const tokenExist = true;
    return !!localStorage.getItem('token');
  }

  /*
  Login Func
  */

  async login(email: string, password: string): Promise<apiRes> {

    const url = `${environment.baseUrl}auth/login`;
    return new Promise((resolve, reject) => {
      this.http.post<apiRes>(url, {
        "email": email,
        "password": password
      }).pipe(takeUntilDestroyed(this.destoryRef)).subscribe({
        next: async (value: apiRes | any) => {
          const encryptedToken = this.encryptionService.encrypt(value.msg!);
          const roles = this.encryptionService.encrypt(JSON.stringify(value.roles!));
          localStorage.setItem('token', encryptedToken!)
          localStorage.setItem('roles', roles!)
          console.log(value);
          resolve(value);
        },
        error(err) {
          reject({
            status: false,
            msg: err.error.msg
          });
        }
      });
    });
  }

  /*
   signup Func
   */

  async signup(userInput: object): Promise<apiRes> {
    const url = `${environment.baseUrl}auth/signup`
    return new Promise((resolve, reject) => {
      this.http.post<apiRes>(url, userInput).pipe(takeUntilDestroyed(this.destoryRef)).subscribe({
        next(value: apiRes) {
          resolve(value);
        }, error(err) {
          reject({
            status: false,
            msg: err.error.msg
          });
        },
      });
    });
  }
  /*
     logout Func
     */
  logout() {
    localStorage.clear();
    this.router.navigate(['/'], { replaceUrl: true });
  }
}

