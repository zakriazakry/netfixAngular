import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef}  from '@angular/material/dialog';

// dialogs
@Component({
  template: `
    <h2 mat-dialog-title>{{data.title}}</h2>
    <mat-dialog-content>{{data.docs}}</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onTap()" style="background: red;" >Delete</button>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
    standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton, MatDialogClose], // MatButtonModule added
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; docs: string } ,
  public dialogRef: MatDialogRef<DialogElementsExampleDialog>) {}
  onTap() {
    this.dialogRef.close('deleted');
  }
}