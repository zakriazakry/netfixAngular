import { Component, inject } from '@angular/core';
import { NavBarComponent } from "../../../components/main/nav-bar/nav-bar.component";
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavBarComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  auth = inject(AuthService);

 async login(){
  const isLogin =  await this.auth.login("zeko@gmail.com","12345678Zeko-");
  if (isLogin) {
    console.log("error");
  }else{
    console.log("error");
  }
  }
}
