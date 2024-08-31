import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth/auth.service';
import { RolesService } from '../../../services/roles-service.service';
import { Roles } from '../../../shared/role';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  role = inject(RolesService);
  roles = Roles;
  isAuth: boolean = false;
  @Input() hiddenBtn: boolean = false;
  faLanguage = faLanguage;
   auth = inject(AuthService);
  constructor(){
    this.isAuth = this.auth.isAuth();

  }
}

