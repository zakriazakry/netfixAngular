import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeModule
  ]
})
export class AdminModule { }
