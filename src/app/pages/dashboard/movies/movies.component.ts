import { Component, inject } from '@angular/core';
import { Movie } from '../../../interfaces/movies.interface';
import { MoviesService } from '../../../services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  movies: Movie[] = [];
  allMovies: Movie[] = [];
  isLoading: boolean = false;
  moviesService = inject(MoviesService);
  inputSearch: string = "";
  // Pagination variables
  start = 0;
  perPage = 15;
  end = this.perPage;

  constructor() {
    this.isLoading = true;
    this.moviesService.getData(1).subscribe({
      next: (res: Movie[]) => {
        this.movies = res;  // Assign the fetched data to movies
        this.allMovies = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
        this.isLoading = false;
      }
    });
  }


  seach() {
    const value = this.inputSearch.toLowerCase().trim();
    this.movies = this.allMovies.filter(item => {
      return item.name.trim().toLowerCase().includes(value);
    });
  }
  // ============================

  get movElement(): Movie[] {
    return this.movies ? this.movies.slice(this.start, this.end) : [];
  }

  nextPage() {
    if (this.end < this.movies.length) {
      this.start += this.perPage;
      this.end += this.perPage;
    } else {
      console.log('No more movies to display');
    }
    console.log(this.start, this.end);
  }

  prevPage() {
    if (this.start > 0) {
      this.start -= this.perPage;
      this.end -= this.perPage;
    } else {
      console.log('You are already on the first page');
    }
    console.log(this.start, this.end);
  }
  // ----------------- tree
  treeMenu = [
    {
      title: "Movies Trands",
      list: ['2024', '2023', '2022', '2021'],
      isShow: false,
    },
    {
      title: "Movies Action",
      list: ['2024', '2023', '2022', '2021'],
      isShow: false,
    },
  ];
  toogelTree(item: any) {
    item.isShow = !item.isShow;
    console.log(item);
  }
}

