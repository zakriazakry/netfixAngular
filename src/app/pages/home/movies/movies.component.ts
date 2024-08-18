import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  list: any[] = [];

  constructor(private moviesService: MoviesService) {
  //  this.getData();
   this.moviesService.getData().subscribe({
    next:(data)=>{
      // this.list = data;
     console.log(data);
    }
   });
   }

  
  getData(){
    
  }
}
