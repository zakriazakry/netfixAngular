import { CommonModule } from '@angular/common';
import { UserRole } from './../../../../../interfaces/userRole';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [MatSlideToggleModule,MatDividerModule,CommonModule],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.scss'
})
export class UserRoleComponent {
  userRoles:UserRole[] = [];
  allRole:UserRole[] = [
    {
      roleID:1,
      roleName:"editor",
      ext:[],
      roleDescrption:"can edit all things."
    },{
      roleID:1,
      roleName:"editor",
      ext:[],
      roleDescrption:"can edit  thingsthingsthingsthingsthingsthingsthingsthingsthingsthingsthingsthingsthingsthings."
    },{
      roleID:1,
      roleName:"editor",
      ext:[],
      roleDescrption:"can editeditediteditediteditediteditediteditediteditedit all things."
    },
  ];

clgs($event: boolean) {
console.log($event);}

// add new User Role
async addNewRole(roleID : number,userID: number){
  console.log("added");
}

}
