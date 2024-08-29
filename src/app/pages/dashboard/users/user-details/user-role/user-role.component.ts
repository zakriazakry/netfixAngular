import { CommonModule } from '@angular/common';
import { UserRole } from './../../../../../interfaces/userRole';
import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RolesService } from '../../../../../services/roles-service.service';
import { ActivatedRoute } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [MatSlideToggleModule, MatDividerModule, CommonModule],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.scss'
})
export class UserRoleComponent {
  roleService = inject(RolesService);
  userId: string | number | null = 0;
  router = inject(ActivatedRoute);
  userRoles: UserRole[] = [];
  roleChecked: number[] = [];

  isloading: boolean = false;
  constructor() {
    this.getData();
  }
  getData() {
    this.isloading = true;
    this.router.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        this.roleService.getUserRoles(this.userId).subscribe((res) => {
          this.userRoles = res;
          this.userRoles.forEach(element => {
            if (element.active) {
              this.roleChecked.push(element.id);
            }
          });
        });
      }
    });
    this.isloading = false;
  }

  clicker(e: MatSlideToggleChange, roleId: any) {
    if (e.checked) {
      this.roleChecked.push(roleId)
    } else {
      this.roleChecked = this.roleChecked.filter(id => id != roleId)
    }
    console.log(this.roleChecked);
  }

  sendRoles(){
    this.isloading = true;
    this.roleService.setUserRole(this.userId,this.roleChecked).subscribe(res=>{
      console.log(res);
    })
    this.isloading = false;
  }
}
