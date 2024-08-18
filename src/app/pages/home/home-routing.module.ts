import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "",
    // component:HomeComponent
    redirectTo: "moves",
    pathMatch: "full"
  },
  {
    path: "moves",
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
