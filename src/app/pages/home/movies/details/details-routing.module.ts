import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TRAILERSandMOREComponent } from './trailersand-more/trailersand-more.component';
import { OverviewComponent } from './overview/overview.component';
import { MORELIKETHISComponent } from './morelikethis/morelikethis.component';

const routes: Routes = [
  {
    path:"",
    redirectTo :"overview",
    pathMatch:"full"
  },
  {
    path: "overview",
    component: OverviewComponent,
    pathMatch: "full"
  },
  {
    path: "trailers-more",
    component: TRAILERSandMOREComponent,
    pathMatch: "full"
  },
  {
    path: "more-like-this",
    component: MORELIKETHISComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
