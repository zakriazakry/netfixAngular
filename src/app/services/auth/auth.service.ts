import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  isAuth(): boolean {
    // and check the token is Exist in database
    const tokenExist = true;
    return !!localStorage.getItem('token');
  }
}
