import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from './dashboardCard.component';
import { AnimatedCounterComponent } from "../../admin/counter/counter.component";

@NgModule({
  imports: [
    CommonModule,
    AnimatedCounterComponent
],
  declarations: [DashboardCardComponent],
  exports:[
    DashboardCardComponent
  ]
})
export class DashboardCardModule { }
