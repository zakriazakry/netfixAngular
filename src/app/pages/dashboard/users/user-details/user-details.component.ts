import { Component } from '@angular/core';
import { MainUserDetailsComponent } from './main-user-details/main-user-details.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UserRoleComponent } from './user-role/user-role.component';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  tabs :any[]=[MainUserDetailsComponent,TransactionsComponent,UserRoleComponent]
  tabIndex = 2;
  tabIndexChanger(n:number){
    console.log(event);
    this.tabIndex =n;
  }
}
