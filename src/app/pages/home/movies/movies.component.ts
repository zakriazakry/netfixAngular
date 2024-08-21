import { NgFor } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { Movie } from '../../../interfaces/movies.interface';
import { MovieDatails } from '../../../interfaces/MovieDatails.interface';
import { Env } from '../../../env';
import { Router } from '@angular/router';
import { VideoRunnerPipe } from '../../../pipes/video-runner.pipe';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  @ViewChild('homePage', { static: false }) homePage!: ElementRef<HTMLDivElement>;
  list: Movie[] = [];
   mainMovie:MovieDatails | undefined =undefined;
  moviesService = inject(MoviesService);
  envs = inject(Env);
  route = inject(Router);
   userName = this.envs.username;
   password = this.envs.password;
   isloading: boolean = false;

  constructor(private videoRunner: VideoRunnerPipe) {
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
//=======================
  playMainMovieUrl: string = '';

  ngOnInit(): void {
    this.playMainMovieUrl = this.getVideoUrl();
  }

  getVideoUrl(): string {
    const streamId = this.mainMovie?.movie_data?.stream_id;
    const containerExtension = this.mainMovie?.movie_data?.container_extension;
    const videoUrl = `${streamId}.${containerExtension}`;
    return this.videoRunner.transform(videoUrl, this.userName, this.password) as string;
  }

  playMainMovie(url:any){
  this.route.navigate(['/player'], { queryParams: { url: url,title :this.mainMovie?.tmdb?.original_title.toLowerCase()} });
  }

}


