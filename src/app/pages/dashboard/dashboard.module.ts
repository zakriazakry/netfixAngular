import { NgModule } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MainUserDetailsComponent } from './users/user-details/main-user-details/main-user-details.component';

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
    AdminSideBarComponent,MatButtonModule,
    MatSlideToggleModule,MainUserDetailsComponent,
    NgComponentOutlet,
    DashboardCardModule,
    NgxEchartsModule.forRoot({ echarts }),
],
})
export class DashboardModule { }
