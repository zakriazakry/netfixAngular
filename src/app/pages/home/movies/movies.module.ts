import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SideBarComponent } from '../../../components/main/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SideBarComponent, RouterOutlet
  ]
})

export class MoviesModule { }
