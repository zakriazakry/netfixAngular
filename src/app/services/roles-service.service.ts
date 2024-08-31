import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { apiRes } from '../interfaces/apiRes.interface';
import { EncryptionService } from './encryption.service';
import { appHttpHeader } from '../shared/httpheader';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private readonly http: HttpClient;
  private readonly headers: HttpHeaders;
  encryptionService = inject(EncryptionService);

  constructor(http: HttpClient) {
    this.http = http;
    this.headers = appHttpHeader;
  }

  getAllRoles(): Observable<any> {
    return this.http.get(`${environment.baseUrl}roles/getRole`, { headers: this.headers });
  }

  getUserRoles(userId: string | number): Observable<any> {
    return this.http.get(`${environment.baseUrl}roles/getRole/${userId}`, { headers: this.headers });
  }

  async setUserRole(userId: string | number | null, rolesIDs: any[]): Promise<apiRes> {
    const url = `${environment.baseUrl}roles/setUserRole/${userId}`;
    const rolesIDsStr = rolesIDs.join(',');
    return new Promise((resolve, reject) => {
      this.http.post<apiRes>(url,
        { rolesIDs: rolesIDsStr },
        { headers: this.headers }
      ).subscribe({
        next(value: apiRes) {
          resolve(value);
        }, error(err: apiRes) {
          reject({
            status: false,
            msg: err.msg
          });
        },
      });
    });
  }
  can(roleIds: number[]): boolean {
    const userRolesStr = this.encryptionService.decrypt(<string>localStorage.getItem('roles'));
    const userRoles = <number[]>JSON.parse(userRolesStr);
    return roleIds.some(roleId => userRoles.includes(roleId));
  }
  canNot(roleIds: number[]): boolean {
    return !this.can(roleIds);
  }
}
