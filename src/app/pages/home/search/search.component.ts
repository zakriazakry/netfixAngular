import { Component, inject } from '@angular/core';
import { Movie } from '../../../interfaces/movies.interface';
import { MoviesService } from '../../../services/movies/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  items: Movie[] = [];
  isLoading: boolean = false;
  hasMore: boolean = true;  // Indicates if there are more items to load
  page: number = 1;
  moviesService = inject(MoviesService);

  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    if (this.isLoading || !this.hasMore) return;

    this.isLoading = true;
    this.moviesService.getData(this.page).subscribe({
      next: (value: Movie[]) => {
        if (value.length > 0) {
          // this.items = [...this.items, ...value];

          this.items = value.slice(51,65);
          this.page++;
        } else {
          this.hasMore = false;
        }
      },
      complete: () => this.isLoading = false,
      error: (err) => console.error(err),
    });
  }
}
