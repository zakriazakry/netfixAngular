import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private toasts: { title: string, content: string }[] = [];
  private toastSubject = new BehaviorSubject<{ title: string, content: string }[]>(this.toasts);
  toasts$ = this.toastSubject.asObservable();

  showToast(title: string, content: string) {
    this.toasts.push({ title, content });
    this.toastSubject.next(this.toasts);
    setTimeout(() => {
      this.toasts.shift();
      this.toastSubject.next(this.toasts);
    }, 3000);
  }

  closeToast(index: number) {
    this.toasts.splice(index, 1);
    this.toastSubject.next(this.toasts);
  }

  getToasts():Observable<any> {
    return this.toasts$;
  }
}
