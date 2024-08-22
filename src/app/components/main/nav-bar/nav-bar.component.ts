import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth/auth.service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isAuth: boolean = false;
  @Input() hiddenBtn: boolean = false;
  faLanguage = faLanguage;
   auth = inject(AuthService);
  constructor(){
    this.isAuth = this.auth.isAuth();
    console.log("-----------");
    console.log(this.isAuth);
  }
}

