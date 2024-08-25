import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { MovieCardComponent } from '../../../components/cards/movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovieCardComponent,
    SearchRoutingModule
  ]
})
export class SearchModule { }
