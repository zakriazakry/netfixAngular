import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // تأكد من استيراد MatButtonModule
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';


// dialogs
@Component({
  templateUrl:'./dialog.componenet.html',
  styleUrl:'./dialog.componenet.scss',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatRadioModule,
    MatDialogClose,
    MatListModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogSubscriptionComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogSubscriptionComponent>
  ) {}

  onTap() {
    this.dialogRef.close('deleted');
  }
}
