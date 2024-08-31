import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { UsersComponent } from './users/users.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MoviesComponent } from './movies/movies.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { MoviedetailsDhComponent } from './movies/moviedetails.dh/moviedetails.dh.component';
import { roleGuard } from '../../gards/role.guard';
import { Roles } from '../../shared/role';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: InfoComponent,
  },
  {
    path: "users",
    canActivate : [roleGuard],
    data:{
      'roles' : [Roles.admin]
    },
    children: [
      {
        path: "",
        pathMatch: "full",
        component: UsersComponent,
      },
      {
        path: ":id",
        pathMatch: "full",
        component: UserDetailsComponent
      }
    ]
  },
  {
    path: "subscriptions",
    component: SubscriptionComponent,
  },
  {
    path: "movies",
    children:[
      {
        path:"",
        pathMatch:"full",
        component: MoviesComponent,
      },
      {
        path:":id",
        pathMatch:"full",
        component: MoviedetailsDhComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
