import { Component, inject } from '@angular/core';
import { NavBarComponent } from "../../../components/main/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../../../components/dialog/payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  rows :any[] = [
    {
      title : "monthly price",
      Basic: "10 LYD",
      Standard  :"25 LYD",
      Premium : "45 LYD"
    },
    {
      title : "Video Quality",
      Basic: "Good",
      Standard  :"Better",
      Premium : "Best"
    },
    {
      title : "Resolution",
      Basic: "720p",
      Standard  :"1080p",
      Premium : "4k+HDR"
    },
    {
      title : "Notficitions",
      Basic: "Non",
      Standard  :"Trands Only",
      Premium : "All"
    },
  ];
  planIndex = 1;

  changePlan(index:number){
    this.planIndex = index;
  }

    readonly dialog = inject(MatDialog);
  payment(){
    this.dialog.open(PaymentDialogComponent);
  }
}
