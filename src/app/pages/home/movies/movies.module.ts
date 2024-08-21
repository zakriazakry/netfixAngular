import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { HomeModule } from '../home.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { VideoRunnerPipe } from '../../../pipes/video-runner.pipe';

@NgModule({
  declarations: [
    MoviesComponent
  ], 
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HomeModule
  ],
})
export class MoviesModule {}
