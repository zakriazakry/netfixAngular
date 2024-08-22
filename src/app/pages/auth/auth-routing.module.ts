import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path:"",
  redirectTo :"login",
  pathMatch:'full'
},
{
  path:"login",
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:"signup",
  component:SignupComponent,
  pathMatch:'full'
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
