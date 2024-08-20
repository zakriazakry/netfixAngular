import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home.component';
import { SideBarComponent } from "../../components/main/side-bar/side-bar.component";
import { MoviesRoutingModule } from './movies/movies-routing.module';
import { SeriesesRoutingModule } from './serieses/serieses-routing.module';
import { MoviesModule } from './movies/movies.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    HomeRoutingModule,
    MoviesRoutingModule,
    SeriesesRoutingModule,
    SideBarComponent,
    MoviesModule
],exports:[HomeComponent]
})
export class HomeModule { }
