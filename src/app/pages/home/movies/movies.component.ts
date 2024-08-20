import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { Movie } from '../../../interfaces/movies.interface';
import { MovieDatails } from '../../../interfaces/MovieDatails.interface';
import { Env } from '../../../env';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  list: Movie[] = [];
   mainMovie:MovieDatails | undefined =undefined;
  moviesService = inject(MoviesService);
  envs = inject(Env);
   userName = this.envs.username;
   password = this.envs.password;
   isloading: boolean = false;

  constructor() {
    this.isloading= true;
    this.moviesService.getData().subscribe({
      next: (value) => {
        this.list = value.slice(this.getRandomInt(100),this.getRandomInt(500));
        this.selectMovie(this.list[0]);
      },complete:()=>this.isloading= false,
      error(err) {
          console.log(err);
      },
    });
  }


  selectMovie(item: Movie) {
    this.isloading = true;
    this.moviesService.getMoviesInfo(item).subscribe({
      next: (movieDetails) => {
        this.mainMovie = movieDetails;
          console.log(this.mainMovie);
        this.isloading = false;
      },
      error: (err) => {
        console.error('Error fetching movie details:', err);
        this.isloading = false;
      }
    });
  }
   getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
}


