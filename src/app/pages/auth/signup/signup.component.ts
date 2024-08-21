import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../../components/main/nav-bar/nav-bar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavBarComponent,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
