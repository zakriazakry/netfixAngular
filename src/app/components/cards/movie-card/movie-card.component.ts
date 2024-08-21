import { Component, Input } from '@angular/core';
import { Movie } from '../../../interfaces/movies.interface';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
@Input({required :true}) item!:Movie;

}
