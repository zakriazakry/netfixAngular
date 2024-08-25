import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SideBarComponent } from '../../components/main/side-bar/side-bar.component';
import { TmdbPipe } from '../../pipes/tmdb.pipe';
import { VideoRunnerPipe } from '../../pipes/video-runner.pipe';
import { ProfileComponent } from './profile/profile.component';
import { TVsComponent } from './tvs/tvs.component';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from "../../components/main/nav-bar/nav-bar.component";
import { ConvertToDatePipe } from '../../pipes/convert-to-date.pipe';
import { MovieCardComponent } from "../../components/cards/movie-card/movie-card.component";
import { AppBarComponent } from "../../components/main/app-bar/app-bar.component";
import { FormsModule } from '@angular/forms';
import { DashboardCardModule } from '../../components/cards/dashboardCard/dashboardCard.module';

@NgModule({
  declarations: [
    HomeComponent,
    TmdbPipe,
    VideoRunnerPipe,
    ProfileComponent,
    TVsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SideBarComponent,
    RouterOutlet,
    HomeRoutingModule,
    NavBarComponent,
    FormsModule,
    MovieCardComponent,
    AppBarComponent,
    DashboardCardModule
],
  exports: [
    HomeComponent,
    TmdbPipe,
    VideoRunnerPipe
  ]
})
export class HomeModule { }
