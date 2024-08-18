import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  http = Inject(HttpClient);
  getData() : Observable<any> {
    return this.http.get("https://xvip.pro/player_api.php?username=0921167862&password=asg1513edg1t&action=get_vod_streams");
  }



  
}
