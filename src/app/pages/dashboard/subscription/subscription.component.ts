import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {
  data: any[] = [];
  allData: any[] = [];
  isLoading: boolean = false;
  inputSearch: string = "";
  // Pagination variables
  start = 0;
  perPage = 15;
  end = this.perPage;

  constructor() {
    this.isLoading = true;
    //
    this.data.push ({
      id:1,
      type:"add",
      title:"New Subscription",
      description :"laslkdjasjd asj dajs dajsd lkjaskd jaslkd alksjd a;lsjd ",
      piad : 200,
      cost : 50,
      profit:12,
      created_at:"2024-4-1 12:42:12",
    });
    this.isLoading = false;
  }


  seach() {
    const value = this.inputSearch.toLowerCase().trim();
    this.data = this.allData.filter(item => {
      return item.name.trim().toLowerCase().includes(value);
    });
  }
  // ============================

  get movElement() {
    return [];
  }

  nextPage() {
    if (this.end < this.data.length) {
      this.start += this.perPage;
      this.end += this.perPage;
    } else {
      console.log('No more movies to display');
    }
    console.log(this.start, this.end);
  }

  prevPage() {
    if (this.start > 0) {
      this.start -= this.perPage;
      this.end -= this.perPage;
    } else {
      console.log('You are already on the first page');
    }
    console.log(this.start, this.end);
  }
}

