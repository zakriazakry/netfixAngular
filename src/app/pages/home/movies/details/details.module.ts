import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { OverviewComponent } from './overview/overview.component';
import { TRAILERSandMOREComponent } from './trailersand-more/trailersand-more.component';
import { MORELIKETHISComponent } from './morelikethis/morelikethis.component';


@NgModule({
  declarations: [
    DetailsComponent,
    OverviewComponent,
    TRAILERSandMOREComponent,
    MORELIKETHISComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
