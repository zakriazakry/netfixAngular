import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { TmdbPipe } from '../../../pipes/tmdb.pipe';
import { VideoRunnerPipe } from '../../../pipes/video-runner.pipe';


@NgModule({
  declarations: [MoviesComponent,
    TmdbPipe,
    VideoRunnerPipe
  ],
  imports: [
    CommonModule,
],
exports:[]
})

export class MoviesModule { }
