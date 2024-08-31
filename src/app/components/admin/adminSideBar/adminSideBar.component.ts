import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { Roles } from '../../../shared/role';
import { RolesService } from '../../../services/roles-service.service';

@Component({
  selector: 'app-adminSideBar',
  standalone:true,
  imports:[RouterLinkActive,RouterLink],
  templateUrl: './adminSideBar.component.html',
  styleUrls: ['./adminSideBar.component.scss']
})
export class AdminSideBarComponent implements OnInit {
  auth = inject(AuthService);
  constructor() { }
  roles = Roles;
  role = inject(RolesService);
  ngOnInit() {
  }

}
