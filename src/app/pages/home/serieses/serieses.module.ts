import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesesRoutingModule } from './serieses-routing.module';
import { SeriesesComponent } from './serieses.component';
import { HomeModule } from '../home.module';

@NgModule({
  declarations: [
    SeriesesComponent
  ],
  imports: [
    CommonModule,
    SeriesesRoutingModule,
    HomeModule
  ],
 
})
export class SeriesesModule {}
