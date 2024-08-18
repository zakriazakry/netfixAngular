import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../components/main/side-bar/side-bar.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SideBarComponent,
    RouterOutlet,
  ]
})
export class HomeModule { }
