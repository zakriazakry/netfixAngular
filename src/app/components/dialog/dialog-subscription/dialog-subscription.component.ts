import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // تأكد من استيراد MatButtonModule
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

// dialogs
@Component({
  template: `
  <h2>Subscriptions</h2>
   <mat-list role="list">
     <mat-list-item role="listitem">Item 1</mat-list-item>
     <mat-list-item role="listitem">Item 2</mat-list-item>
     <mat-list-item role="listitem">Item 3</mat-list-item>
   </mat-list>
  `,
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatDialogClose,
    MatListModule 
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogSubscriptionComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; docs: string },
    public dialogRef: MatDialogRef<DialogSubscriptionComponent> 
  ) {}

  onTap() {
    this.dialogRef.close('deleted');
  }
}
