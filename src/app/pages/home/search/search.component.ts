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
  fakedata: any[] = [...Array(100).keys()]; // Example data
  itemsPerPage: number = 5;
  currentPage: number = 1;
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

  // pagnation
  get totalPages(): number {
    return Math.ceil(this.fakedata.length / this.itemsPerPage);
  }

  get paginatedData(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.fakedata.slice(start, end);
  }

  getListOfPagination(): (string | number)[] {
    const pages: (string | number)[] = [];
    const totalPages = this.totalPages;
    const maxPagesToShow = 10;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 5) {
        for (let i = 1; i <= 6; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (this.currentPage >= totalPages - 5) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 5; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }

    }

    return pages;
  }

  changePage(page: number | string): void {
    if (page === 'prev') {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    } else if (page === 'next') {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    } else if (typeof page === 'number') {
      this.currentPage = page+1;
    }
  }
}
