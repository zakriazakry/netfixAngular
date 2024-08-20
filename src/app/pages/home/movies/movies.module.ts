import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { HomeModule } from '../home.module';

@NgModule({
  declarations: [
    MoviesComponent,
  ], 
  imports: [
    CommonModule,
    HomeModule
  ],
  
})
export class MoviesModule {}
