import { Component, inject } from '@angular/core';
import { NavBarComponent } from "../../../components/main/nav-bar/nav-bar.component";
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavBarComponent,RouterLink,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // ------Injects 
  router = inject(Router);
  auth = inject(AuthService);
  // ------vars 
  errorMsg:string = '';
  isLoading:boolean=false;
  userInput = {
    email: '',
    password: ''
  };
  // ------methdos
 async login(){
  if (this.userInput.email == '' ||this.userInput.password == '' ||this.isLoading) {
    return;
  }
  this.isLoading =true;
  await this.auth.login(this.userInput.email,this.userInput.password).then(res=>{
    this.router.navigate(['home'],{replaceUrl:true});
  }).catch(err=>{
    this.errorMsg = err.msg;
  });
  this.isLoading = false;
  }
}
