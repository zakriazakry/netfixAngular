import { Routes } from '@angular/router';
import { authRoutes } from './pages/auth/auth.routes';
import { Error404Component } from './pages/errors/error404/error404.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
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
    path: 'auth',
    loadChildren: () => authRoutes,
  },
  {
    path: '**',
    component: Error404Component
  }
];
