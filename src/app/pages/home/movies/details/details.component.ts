import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../../../services/movies/movies.service';
import { MovieDatails } from '../../../../interfaces/MovieDatails.interface';
import { VideoRunnerPipe } from '../../../../pipes/video-runner.pipe';
import { Env } from '../../../../env';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  isloading = true;
  movie!: MovieDatails;
  movieId!: string | null;
  playMainMovieUrl = '';
  envs = inject(Env);
  private userName = this.envs.username;
  private password = this.envs.password;

  constructor(
    private videoRunner: VideoRunnerPipe,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService
  ) {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      if (this.movieId) {
        this.fetchMovieDetails(this.movieId);
      }
    });
      console.log(this.envs);

  }

  private fetchMovieDetails(id: string): void {
    this.isloading = true;
    this.movieService.getMovieInfoById(id).subscribe({
      next: (res) => {
        this.movie = res;
        this.isloading = false;
        this.playMainMovieUrl = this.getVideoUrl();
      },
      error: (err) => {
        console.error('Error fetching movie details:', err);
        this.isloading = false;
      }
    });
  }

  getVideoUrl(): string {
    const streamId = this.movie?.movie_data?.stream_id;
    const containerExtension = this.movie?.movie_data?.container_extension;
    console.log(containerExtension);
    console.log(streamId);
    if (!streamId || !containerExtension) {
      console.error('Invalid stream data');
      return '';
    }
    const videoUrl = `${streamId}.${containerExtension}`;
    return this.videoRunner.transform(videoUrl, this.userName, this.password) as string;
  }

  playMainMovie(url: string): void {
    this.router.navigate(['/player'], { queryParams: { url, title: this.movie?.tmdb?.original_title?.toLowerCase() } });
  }
}
