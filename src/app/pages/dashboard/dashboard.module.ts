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
import { MatButtonModule } from '@angular/material/button';
import { MainUserDetailsComponent } from './users/user-details/main-user-details/main-user-details.component';
import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbToastrModule } from '@nebular/theme';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { appConfig } from '../../app.config';
import { httpInterceptorInterceptor } from '../../interceptors/http-intercptor.interceptor';

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
    AdminSideBarComponent, MatButtonModule,
    MatSlideToggleModule, MainUserDetailsComponent,
    NgComponentOutlet,
    FormsModule,HttpClientModule,
    DashboardCardModule,
    NgxEchartsModule.forRoot({ echarts }),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbToastrModule.forRoot(), // Import here
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useFactory: () => httpInterceptorInterceptor,
  //     multi: true
  //   }
  // ],
})
export class DashboardModule { }
