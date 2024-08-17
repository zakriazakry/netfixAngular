import { Component } from '@angular/core';
import { NavBarComponent } from "../../../components/main/nav-bar/nav-bar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavBarComponent,NavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
