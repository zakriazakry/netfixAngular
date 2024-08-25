import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from '../home/home.module';
import { RouterOutlet } from '@angular/router';
import { AdminSideBarComponent } from "../../components/admin/adminSideBar/adminSideBar.component";


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterOutlet,
    AdminSideBarComponent,
],
})
export class DashboardModule { }
