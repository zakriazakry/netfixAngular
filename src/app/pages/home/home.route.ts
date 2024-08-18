import { Routes } from "@angular/router"


export const HomeRoutes: Routes = [
  {
    path: "",
    redirectTo: "moves",
    pathMatch: "full"
  },
  {
    path: "moves",
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
  }
];
