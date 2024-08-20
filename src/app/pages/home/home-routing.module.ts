import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SeriesesComponent } from './serieses/serieses.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"movies",
    pathMatch:"full"
  },
  {
    path:"movies",
    component:MoviesComponent,
    pathMatch:"full"
  },
  {
    path:"serieses",
    component:SeriesesComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
