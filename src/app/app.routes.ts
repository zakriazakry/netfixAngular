import { Routes } from '@angular/router';
import { authRoutes } from './pages/auth/auth.routes';
import { Error404Component } from './pages/errors/error404/error404.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: WelcomeComponent,
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
