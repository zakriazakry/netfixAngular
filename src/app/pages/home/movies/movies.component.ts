import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { Movie } from '../../../interfaces/movies.interface';
import { MovieDatails } from '../../../interfaces/MovieDatails.interface';

@Component({
  selector: 'app-movies',
  standalone:true,
  imports:[NgFor],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  list: Movie[] = [];
   mainMovie:MovieDatails | undefined =undefined;
  moviesService = inject(MoviesService);
  isloading:boolean = false;
  constructor() {
    this.isloading= true;
    this.moviesService.getData().subscribe({
      next: (value) => {
        this.list = value.slice(5000, 5100);
        this.selectMovie(this.list[0]);
      },complete:()=>this.isloading= false,
    });

  }
  selectMovie(item:Movie)
  {
    this.moviesService.getMoviesInfo(item).subscribe(movieDetails => {
      // console.log( movieDetails.info );
      this.mainMovie = movieDetails;
    });

  }

}


