import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { Movie } from '../../../interfaces/movies.interface';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  list: Movie[] = [];
  moviesService = inject(MoviesService);
  isloading:boolean = false;
  constructor() {
    this.isloading= true;
    this.moviesService.getData().subscribe({
      next: (value) => {
        this.list = value.slice(50, 65);
        
      },complete:()=>this.isloading= false,
    });
  }
}
