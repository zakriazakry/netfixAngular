import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterOutlet } from '@angular/router';
import { AdminSideBarComponent } from "../../components/admin/adminSideBar/adminSideBar.component";
import { DashboardCardModule } from '../../components/cards/dashboardCard/dashboardCard.module';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterOutlet,
    AdminSideBarComponent,
    DashboardCardModule
],
})
export class DashboardModule { }
