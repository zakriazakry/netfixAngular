import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService  {
  private toasterSubject = new Subject<string>();
  toasterState = this.toasterSubject.asObservable();
  
  showToast(message: string) {
    this.toasterSubject.next(message);
  }

}