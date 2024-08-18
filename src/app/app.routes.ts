import { Routes } from '@angular/router';
import { authRoutes } from './pages/auth/auth.routes';
import { Error404Component } from './pages/errors/error404/error404.component';
import { HomeRoutes } from './pages/home/home.route';
import { WelcomeComponent } from './pages/welcome/welcome.component';
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
    loadChildren: ()=> HomeRoutes
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
