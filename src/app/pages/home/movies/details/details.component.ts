import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { config } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
getVideoUrl(): any {
throw new Error('Method not implemented.');
}
playMainMovie(arg0: any) {
throw new Error('Method not implemented.');
}
 movieId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      console.log(this.movieId);
    });
  }
}
