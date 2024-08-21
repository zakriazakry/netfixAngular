import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tmdb'
})
@Injectable({
  providedIn: 'root'  // This makes the pipe available as a singleton service throughout the app
})
export class TmdbPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `http://image.tmdb.org/t/p/original${value}`;
  }

}
