import { CommonModule } from '@angular/common';
import {  MovieDatails } from '../../../../interfaces/MovieDatails.interface';
import { Component } from '@angular/core';
import { VideoRunnerPipe } from '../../../../pipes/video-runner.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../../../services/movies/movies.service';

@Component({
  selector: 'app-moviedetails.dh',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moviedetails.dh.component.html',
  styleUrl: './moviedetails.dh.component.scss'
})
export class MoviedetailsDhComponent {
  movie!:MovieDatails;
  movieId:any;
  isloading = false;
  constructor(
    private videoRunner: VideoRunnerPipe,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.movieId = params.get('id');
      if (this.movieId) {
        this.fetchMovieDetails(this.movieId);
      }
    });
  }


  private fetchMovieDetails(id: string): void {
    this.isloading = true;
    this.movieService.getMovieInfoById(id).subscribe({
      next: (res) => {
        console.log(res);
        if (!res.info ||
          !res.movie_data ||
          res.tmdb === undefined) {
          // this.router.navigate(["/"]);
        }
        this.movie = res;
        this.isloading = false;
        // this.playMainMovieUrl = this.getVideoUrl();
      },
      error: (err) => {
        console.error('Error fetching movie details:', err);

        this.isloading = false;
      },
    });
  }
}
