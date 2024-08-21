import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoRunner'
})
@Injectable({
  providedIn: 'root' 
})
export class VideoRunnerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // جبتها عبر args بش نتعلم ال passing data
    console.log(args);
    return `http://xvip.pro/movie/${args[0]}/${args[1]}/${value}`;
  }

}
