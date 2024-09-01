import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToasterService } from '../../../services/toaster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @ViewChild('natfications', { static: true }) natfications!: ElementRef;
  message: string | null = null;

  constructor(private toasterService: ToasterService) {}

  ngOnInit() {
    this.toasterService.toasterState.subscribe((message) => {
      this.message = message;
      this.showToast();
      setTimeout(() => {
        this.message = null;
        this.clearToast();
      }, 2000); // إخفاء التوستر بعد 2 ثوانٍ
    });
  }

  showToast() {
    const toast = document.createElement('div');
    toast.innerHTML = `
      <div class="toast">
        <i class="fa fa-user" aria-hidden="true"></i>
        <div class="content">
          <h3>title</h3>
          <p>${this.message}</p>
        </div>
        <i class="fa-solid fa-xmark"></i>
      </div>
    `;
    this.natfications.nativeElement.appendChild(toast);
  }

  clearToast() {
    if (this.natfications.nativeElement.firstChild) {
      this.natfications.nativeElement.removeChild(this.natfications.nativeElement.firstChild);
    }
  }
}
