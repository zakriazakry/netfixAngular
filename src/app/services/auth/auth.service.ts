import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthRes } from '../../interfaces/AuthRes.interface';

import { environment } from '../../../environments/environment.development';
import { catchError, throwError } from 'rxjs';
import { ConfigationService } from '../configation.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  cnf = inject(ConfigationService);

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
  async login(email:string,password:string):Promise<boolean>
   {
    const url = await this.cnf.getUrl();
    // console.log(url);
    // return;
    this.http.post(`${url}auth/login`,{
      "email" :email,
      "password" : password
    },).subscribe({
      next(value) {
          console.log(value);
     return false;
      },
      error(err) {
          console.log(err);
      },
    });
     return false;
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
