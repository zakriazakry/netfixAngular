import { Routes } from '@angular/router';
import { Error404Component } from './pages/errors/error404/error404.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/home/player/player.component';
import { isAuthGuard, isNotAuthGuard } from './gards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { roleGuard } from './gards/role.guard';
import { Roles } from './shared/role';
import { ServerErrorComponent } from './pages/errors/serverError/serverError.component';
import { ForbiddenComponent } from './pages/errors/forbidden/forbidden.component';
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
    canActivate:[isAuthGuard,roleGuard],
    data:{
      'roles' : <number[]>[Roles.admin,Roles.contentManager]
    }
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
  // Errors
  {
    path:'errors',
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/home',
      },
      {
        path:'server',
        component:ServerErrorComponent,

      },
      {
        path:'not-found',
        component:Error404Component
      },
      {
        path:'forbidden',
        component:ForbiddenComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo:'errors/not-found'
  }
];
