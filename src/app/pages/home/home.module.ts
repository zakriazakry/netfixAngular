import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SideBarComponent } from '../../components/main/side-bar/side-bar.component';
import { TmdbPipe } from '../../pipes/tmdb.pipe';
import { VideoRunnerPipe } from '../../pipes/video-runner.pipe';

import { MoviesModule } from './movies/movies.module';
import { SeriesesModule } from './serieses/serieses.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    TmdbPipe,
    VideoRunnerPipe,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SideBarComponent,
    RouterOutlet,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    TmdbPipe,
    VideoRunnerPipe
  ]
})
export class HomeModule {}
