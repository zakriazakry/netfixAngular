import { Component } from '@angular/core';
import { MainUserDetailsComponent } from './main-user-details/main-user-details.component';
import { PlanComponent } from './plan/plan.component';
import { TransactionsComponent } from './transactions/transactions.component';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  tabs :any[]=[MainUserDetailsComponent,PlanComponent,TransactionsComponent]
  tabIndex = 0;
  tabIndexChanger(n:number){
    console.log(event);
    this.tabIndex =n;
  }
}
