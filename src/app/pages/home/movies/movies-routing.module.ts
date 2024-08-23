import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: DetailsComponent,
    pathMatch:"full"
    // loadComponent:()=> import("./details/details.component").then(m=>m.DetailsComponent)
    // loadChildren:()=>import("./details/details.module").then(m=>m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
