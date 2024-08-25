import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../../../services/movies/movies.service';
import { MovieDatails } from '../../../../interfaces/MovieDatails.interface';
import { VideoRunnerPipe } from '../../../../pipes/video-runner.pipe';
import { environment } from '../../../../../environments/environment.development';
import { OverviewComponent } from './overview/overview.component';
import { TRAILERSandMOREComponent } from './trailersand-more/trailersand-more.component';
import { MORELIKETHISComponent } from './morelikethis/morelikethis.component';
import { HomeModule } from '../../home.module';
import { CommonModule, NgComponentOutlet, NgFor, NgIf } from '@angular/common';
import { ConvertToDatePipe } from '../../../../pipes/convert-to-date.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HomeModule, CommonModule, ConvertToDatePipe],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  changePage(_i: number) {
    this.index = _i;
  }
  isloading = true;
  movie!: MovieDatails;
  movieId!: string | null;
  playMainMovieUrl = '';
  userName = environment.username;
  password = environment.password;

  pages = [
    {
      component: OverviewComponent,
      name: 'OVERVIEW',
    },
    {
      component: TRAILERSandMOREComponent,
      name: 'TRAILERS & MORE',
    },
    {
      component: MORELIKETHISComponent,
      name: 'MORE LIKE THIS',
    },
  ];
  index = 0;

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
        this.movie = res;
        this.isloading = false;
        this.playMainMovieUrl = this.getVideoUrl();
      },
      error: (err) => {
        console.error('Error fetching movie details:', err);
        this.isloading = false;
      },
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
    return this.videoRunner.transform(
      videoUrl,
      this.userName,
      this.password
    ) as string;
  }

  playMainMovie(url: string): void {
    this.router.navigate(['/player'], {
      state: {
        url,
        title: this.movie?.tmdb?.original_title?.toLowerCase(),
      },
    });
  }
  openTrailer(){
    window.open( "https://www.youtube.com/watch?v="+this.movie.info.youtube_trailer,"_blank");
  }
}
