import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterOutlet } from '@angular/router';
import { AdminSideBarComponent } from "../../components/admin/adminSideBar/adminSideBar.component";
import { DashboardCardModule } from '../../components/cards/dashboardCard/dashboardCard.module';
import { InfoComponent } from './info/info.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { UsersComponent } from './users/users.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MoviesComponent } from './movies/movies.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InfoComponent,
    UsersComponent,
    SubscriptionComponent,
    MoviesComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterOutlet,
    AdminSideBarComponent,
    DashboardCardModule,
    NgxEchartsModule.forRoot({ echarts }),
],
})
export class DashboardModule { }