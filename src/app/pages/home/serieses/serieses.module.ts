import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesesRoutingModule } from './serieses-routing.module';
import { SeriesesComponent } from './serieses.component';


@NgModule({
  declarations: [
    SeriesesComponent
  ],
  imports: [
    CommonModule,
    SeriesesRoutingModule
  ]
})
export class SeriesesModule { }
