import { Component } from '@angular/core';
import { SideBarComponent } from "../../../components/main/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [SideBarComponent,RouterOutlet],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

}
