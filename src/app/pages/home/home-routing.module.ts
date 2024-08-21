import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SeriesesComponent } from './serieses/serieses.component';
import { ProfileComponent } from './profile/profile.component';
import { TVsComponent } from './tvs/tvs.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './movies/details/details.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"movies",
    pathMatch:"full"
  },
  {
    path:"movies",
    loadChildren:()=>import("./movies/movies.module").then(m=>m.MoviesModule),
    // pathMatch:"full"
  },
  {
    path:"serieses",
    component:SeriesesComponent
  },
  {
    path:"TVs",
    component:TVsComponent
  },
  {
    path:"downloads",
    component:DownloadsComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path: 'search',
    component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
