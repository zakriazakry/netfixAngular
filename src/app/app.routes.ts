import { Routes } from '@angular/router';
import { authRoutes } from './pages/auth/auth.routes';
import { Error404Component } from './pages/errors/error404/error404.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/home/player/player.component';
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
    component:HomeComponent,
    loadChildren: ()=> import("./pages/home/home.module").then(m=>m.HomeModule)
  },
  {
    path: 'player',
    component:PlayerComponent
    // loadChildren: ()=> import("./pages/home/home.module").then(m=>m.HomeModule)
    // children:[
    //   {
    //     path:"movies",
    //     component:MoviesComponent,
    //   }
    // ]
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
