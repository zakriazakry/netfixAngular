import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthRes } from '../../interfaces/AuthRes.interface';

import { environment } from '../../../environments/environment.development';
import { catchError, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  constructor() { }
  isAuth(): boolean {
    // and check the token is Exist in database
     const tokenExist = true;
     return !!localStorage.getItem('token');
    }
    /*
    Login Func
    */
   login(email:string,password:string):AuthRes
   {
    this.http.post(environment.baseUrl+"auth/login",{
      "email" :email,
      "password" : password
    }).subscribe({
      next(value) {
          console.log(value);
      },
      error(err) {
          console.log(err);
      },
    });
     return {
       errorMsg:null,
       status:true,
       token:"ooooooooooo"
      };
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
