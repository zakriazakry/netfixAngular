import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiRes } from '../../interfaces/apiRes.interface';

import { environment } from '../../../environments/environment.development';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);

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
          localStorage.setItem('token', value.msg!)
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
      this.http.post<apiRes>(url, userInput).subscribe({
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
  logout(){
    localStorage.clear();
    this.router.navigate(['/'],{replaceUrl:true});
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
