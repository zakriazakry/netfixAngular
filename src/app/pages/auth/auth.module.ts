import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../components/main/nav-bar/nav-bar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavBarComponent,
    AuthRoutingModule,
    RouterLink,
  ]
})
export class AuthModule { }
