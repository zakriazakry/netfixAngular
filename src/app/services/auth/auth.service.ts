import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthRes } from '../../interfaces/AuthRes.interface';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   http = inject(HttpClient);
  encryptSecretKey: string = "1234";
  constructor() { }
  isAuth(): boolean {
    // and check the token is Exist in database
    const tokenExist = true;
    return !!localStorage.getItem('token');
  }
  login(username:string,password:string):AuthRes
  {
    // this.http.post({})
    return {
      errorMsg:null,
      status:true,
      token:"ooooooooooo"
    };
  }

  encryptData(data: any): any {

    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
    } catch (e) {
      console.log(e);
    }
  }

  decryptData(data: any): any {

    try {
      const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
