import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private readonly http: HttpClient;
  private readonly headers: HttpHeaders;

  constructor(http: HttpClient) {
    this.http = http;
    this.headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer 3|EKtAxhYNVAGtskJHtqYATftmSv4THyK10ypN26Rz512df8c7'
    });
  }
 
  getAllRoles(): Observable<any> {
    return this.http.get(`${environment.baseUrl}roles/getRole`, { headers: this.headers });
  }

  getUserRoles(userId: string | number): Observable<any> {
    return this.http.get(`${environment.baseUrl}roles/getRole/${userId}`, { headers: this.headers });
  }

  setUserRole(userId: string | number | null, rolesIDs: any[]): Observable<any> {
    const rolesIDsStr = rolesIDs.join(',');
    return this.http.post(
      `${environment.baseUrl}roles/setUserRole/${userId}`,
      { roles: rolesIDsStr },  // Ensure 'rolesIDs' matches exactly
      { headers: this.headers }
    );
  }
  
  
}
