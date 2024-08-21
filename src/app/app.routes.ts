import { Routes } from '@angular/router';
import { Error404Component } from './pages/errors/error404/error404.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/home/player/player.component';
import { isAuthGuard } from './gards/is-auth.guard';
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
    loadChildren: ()=> import("./pages/home/home.module").then(m=>m.HomeModule),
    canActivate:[isAuthGuard]
  },
  {
    path: 'auth',
    loadChildren: ()=> import("./pages/auth/auth.module").then(m=>m.AuthModule),
    canDeactivate:[isAuthGuard]
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
