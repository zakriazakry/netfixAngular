import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-payment-dialog',
  standalone: true,
  imports: [MatButtonModule,MatDialogActions,MatDialogClose,MatDialogTitle,MatDialogContent,MatDividerModule,MatRadioModule,],
  templateUrl: './payment-dialog.component.html',
  styleUrl: './payment-dialog.component.scss'
})
export class PaymentDialogComponent {

}
