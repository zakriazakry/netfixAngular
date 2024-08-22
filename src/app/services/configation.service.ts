import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigationService {
  http = inject(HttpClient);
  constructor() {
   }

   async getUrl(): Promise<string> {
    try {
      const response: any = this.http.get("assets/config.json");
      return response.base_url;
    } catch (error) {
      console.error('Error fetching URL:', error);
      throw error;
    }
  }
}
