import { Routes } from '@angular/router';
import { Error404Component } from './pages/errors/error404/error404.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/home/player/player.component';
import { isAuthGuard, isNotAuthGuard } from './gards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
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
  // admin
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: ()=> import("./pages/dashboard/dashboard.module").then(m=>m.DashboardModule),
    canActivate:[isAuthGuard]
  },
  {
    path: 'home',
    component:HomeComponent,
    loadChildren: ()=> import("./pages/home/home.module").then(m=>m.HomeModule),
    canActivate:[isAuthGuard]
  },
  {
    path: 'auth',
    loadChildren: ()=> import("./pages/auth/auth.module").then(m=>m.AuthModule),
    canActivate:[isNotAuthGuard]
  },
  {
    path: 'player',
    component:PlayerComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];
