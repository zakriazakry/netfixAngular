import { Component } from '@angular/core';
import { NavBarComponent } from "../../../components/main/nav-bar/nav-bar.component";
import { RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavBarComponent,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  goToCreateAccount(){

  }
}
