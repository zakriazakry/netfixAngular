import { MovieData, MovieDatails, MovieInfo, tmdb } from './../../interfaces/MovieDatails.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Movie } from '../../interfaces/movies.interface';
import { Env } from '../../env';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  envs = inject(Env);
  private userName = this.envs.username;
  private password = this.envs.password;
  private fake_base_url : string= "http://localhost:4200/assets/database.json";
  private real_base_url : string=  `https://xvip.pro/player_api.php?username=${this.userName}&password=${this.password}`;
  // private base_url: string = this.fake_base_url;
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // return this.http.get(`${this.real_base_url}&action=get_vod_streams`);
    return this.http.get<Observable<any>>(`${this.fake_base_url}`);
  }

  getMoviesInfo(item: Movie): Observable<MovieDatails> {
    const movieInfoUrl = `${this.real_base_url}&action=get_vod_info&vod_id=${item.stream_id}`;
    const tmdbUrl = (tmdb_id: string) => `http://api.themoviedb.org/3/movie/${tmdb_id}?api_key=f584f73e8848d9ace559deee1e5a849f&language=ar`;

    return this.http.get<MovieDatails>(movieInfoUrl).pipe(
      switchMap((movieDetails: MovieDatails) => {
        if (movieDetails?.info?.tmdb_id) {
          return forkJoin([
            of(movieDetails),
            this.http.get<tmdb>(tmdbUrl(movieDetails.info.tmdb_id)).pipe(
              catchError(() => of(undefined)) // Handle errors in TMDB request
            )
          ]).pipe(
            map(([movieDetails, tmdbData]) => {
              if (tmdbData) {
                movieDetails.tmdb = tmdbData;
              }
              return movieDetails;
            })
          );
        } else {
          return of(movieDetails);
        }
      }),
      catchError(err => {
        console.error('Error fetching movie details:', err);
        return of({ info: {} as MovieInfo, movie_data: {} as MovieData, tmdb: undefined });
      })
    );
  }
  getMovieInfoById(id:string):Observable<MovieDatails> {
    const fakeitem :Movie = {
      stream_id: id,
      num: 0,
      name: '',
      stream_type: '',
      stream_icon: '',
      rating: '',
      rating_5based: 0,
      added: '',
      is_adult: '',
      category_id: '',
      container_extension: '',
      custom_sid: '',
      direct_source: ''
    };
   return this.getMoviesInfo(fakeitem);
  }
}
