import { Component, inject, Input } from '@angular/core';
import { Movie } from '../../../interfaces/movies.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  router = inject(Router)
@Input() item!:Movie;
goToMovive(){
  this.router.navigate(["home","movies",this.item.stream_id]);
}
}
