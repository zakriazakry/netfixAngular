import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiRes } from '../interfaces/apiRes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { appHttpHeader } from '../shared/httpheader';

@Injectable({
  providedIn: 'root'
})
export class UserService {
http = inject(HttpClient);
constructor() { }

  getUserData (userID:any) : Observable<apiRes>{
   return this.http.get<apiRes>(`${environment.baseUrl}user/${userID}`,{
    headers:appHttpHeader
   });
  }
}
