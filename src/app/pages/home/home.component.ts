import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/main/side-bar/side-bar.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    CommonModule,
    SideBarComponent,
    RouterOutlet,MoviesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
