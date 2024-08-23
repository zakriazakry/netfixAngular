import { NgFor } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { Movie } from '../../../interfaces/movies.interface';
import { MovieDatails } from '../../../interfaces/MovieDatails.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoRunnerPipe } from '../../../pipes/video-runner.pipe';
import { environment } from '../../../../environments/environment.development';

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
  route = inject(Router);
  myRoute = inject(ActivatedRoute);
   userName = environment .username;
   password = environment.password;
   isloading: boolean = false;

  constructor(private videoRunner: VideoRunnerPipe) {
    this.isloading= true;
    this.moviesService.getData().subscribe({
      next: (value) => {
        this.list = value.slice(4450,4495);
        this.selectMovie(this.list[0]);
      },complete:()=>this.isloading= false,
      error(err) {
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

  goToMovive(item:Movie){
    this.route.navigate([item.stream_id],{relativeTo: this.myRoute});
  }

  // goToMoviveById(stream_id:any){
  //   this.route.navigate([stream_id],{relativeTo: this.myRoute});
  // }

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
  this.route.navigate(['/player'], { state: { url: url,title :this.mainMovie?.tmdb?.original_title.toLowerCase()} });
  }

}


