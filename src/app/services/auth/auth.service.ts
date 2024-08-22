import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiRes } from '../../interfaces/apiRes.interface';

import { environment } from '../../../environments/environment.development';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);

  constructor() {

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
      }).subscribe({
        next(value: apiRes) {
          console.log(value);
          resolve(value);
        },
        error(err) {
          console.log(err);
          resolve({
            status: false,
            msg: 'An error occurred'
          });
        }
      });
    });
  }
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}

// import * as CryptoJS from 'crypto-js';
// encryptSecretKey: string = "1234";
// encryptData(data: any): any {

//   try {
//     return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
//   } catch (e) {
//     console.log(e);
//   }
// }

// decryptData(data: any): any {

//   try {
//     const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
//     if (bytes.toString()) {
//       return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//     }
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// }
