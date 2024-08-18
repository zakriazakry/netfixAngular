import { Routes } from '@angular/router';
import { authRoutes } from './pages/auth/auth.routes';
import { Error404Component } from './pages/errors/error404/error404.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/home/movies/movies.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    // loadChildren: ()=> import("./pages/home/ro").then(m=>m.HomeModule)
    children:[
      {
        path:"",
      component : HomeComponent,
      },
      {
        path:"movives",
        component : MoviesComponent,
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => authRoutes,
  },
  {
    path: '**',
    component: Error404Component
  }
];
