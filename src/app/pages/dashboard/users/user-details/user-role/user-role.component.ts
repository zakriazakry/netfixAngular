import { CommonModule } from '@angular/common';
import { UserRole } from './../../../../../interfaces/userRole';
import { Component, HostBinding, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { RolesService } from '../../../../../services/roles-service.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [MatSlideToggleModule, MatDividerModule, CommonModule],
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss'],
})
export class UserRoleComponent {
  roleService = inject(RolesService);
  userId: string | number | null = 0;
  router = inject(ActivatedRoute);
  userRoles: UserRole[] = [];
  roleChecked: number[] = [];
  isloading: boolean = false;

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  constructor(
    private snackBar: MatSnackBar
  ) {
    this.getData();
  }

  getData() {
    this.isloading = true;
    this.router.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        this.roleService.getUserRoles(this.userId).subscribe(
          (res) => {
            this.userRoles = res;
            this.roleChecked = this.userRoles
              .filter((role) => role.active)
              .map((role) => role.id);
            this.isloading = false;
          },
          (err) => {
            this.isloading = false;
            this.showSnackbar('Error loading roles');
          }
        );
      } else {
        this.isloading = false;
      }
    });
  }

  clicker(e: MatSlideToggleChange, roleId: any) {
    if (e.checked) {
      this.roleChecked.push(roleId);
    } else {
      this.roleChecked = this.roleChecked.filter((id) => id !== roleId);
    }
  }

  sendRoles() {
    this.isloading = true;
    this.roleService
      .setUserRole(this.userId, this.roleChecked)
      .then((res) => {
        console.log('Roles updated successfully:', res);
        this.showSnackbar(res.msg ?? 'error');
      })
      .catch((err) => {
        console.error('Error updating roles:', err);
        this.showSnackbar('Error updating roles');
      })
      .finally(() => {
        this.isloading = false;
      });
  }

  showSnackbar(title: string) {
    this.snackBar.open(title, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'success-dialog',
    });
  }
}
