import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  Input,
  Output,
  output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from '../../../components/dialog/confirm-dialog/confirm-dialog.component';
import { DialogSubscriptionComponent } from '../../../components/dialog/dialog-subscription/dialog-subscription.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { appHttpHeader } from '../../../shared/httpheader';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users = <any>[];
  readonly dialog = inject(MatDialog);
  isloading: boolean = false;
  deleteDialog() {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
      data: {
        title: 'Do You Need!',
        docs: 'Do you need to delete the user?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'deleted') {
        console.log('تم حذف المستخدم.');
      }
    });
  }
  subscript() {
    const dialogRef = this.dialog.open(DialogSubscriptionComponent, {
      data: {
        title: 'Do You Need!',
        docs: 'Do you need سسسس delete the user?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'deleted') {
        console.log('تم حذف المستخدم.');
      }
    });
  }
  http = inject(HttpClient);
  constructor() {
    this.isloading = true;
    this.http
      .get(environment.baseUrl + 'user/getUsers',{
        headers:appHttpHeader
      })
      .subscribe((res: any) => {
        this.users = res;
        this.isloading = false;
      });
  }
}
