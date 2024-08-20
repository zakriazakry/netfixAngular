import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SeriesesComponent } from './serieses/serieses.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"movies",
    pathMatch:"full"
  },
  {
    path:"movies",
    // component:MoviesComponent,
    loadChildren:()=>import("./movies/movies.module").then(m=>m.MoviesModule),
    pathMatch:"full"
  },
  {
    path:"serieses",
    component:SeriesesComponent,
    pathMatch:"full"
  },
  {
    path:"profile",
    component:ProfileComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
