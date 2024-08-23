import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavBarComponent } from '../../../components/main/nav-bar/nav-bar.component';
import { AuthService } from '../../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavBarComponent, RouterLink, FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  // ---------Injects-----------------
  auth = inject(AuthService);
  router = inject(Router);
  // ---------vars-----------------
  errorMsg:string = '';
  isLoading:boolean=false;
  isAccept:boolean = false;
  userInputs = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };
  // ---------methods-----------------

 async signup() {
    if (this.isLoading || !this.isAccept) {
      return;
    }
    this.isLoading =true;
   await this.auth.signup(this.userInputs).then(res => {
      this.router.navigate(["auth/login"],{replaceUrl:true});
    }).catch(err => {
      this.errorMsg = err.msg;
    });
    this.isLoading = false;
  }
}
