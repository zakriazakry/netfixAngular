import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tmdb'
})
export class TmdbPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `http://image.tmdb.org/t/p/original${value}`;
  }

}
