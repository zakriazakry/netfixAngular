import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { ToasterService } from '../../../services/toaster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit{
  toastService = inject(ToasterService);
  toasts : any[] = [];
  ngOnInit(){
    this.toastService.getToasts().subscribe(res=>{
      this.toasts = res;
    })
  }
  closeTab(index:number){
    this.toastService.closeToast(index);
}
}
