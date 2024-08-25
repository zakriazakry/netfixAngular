import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from './dashboardCard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardCardComponent],
  exports:[
    DashboardCardComponent
  ]
})
export class DashboardCardModule { }
