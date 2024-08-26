import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { UsersComponent } from './users/users.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MoviesComponent } from './movies/movies.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

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
    component: MoviesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
