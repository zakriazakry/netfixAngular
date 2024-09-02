import { Component, inject, ɵɵgetInheritedFactory } from '@angular/core';
import { MainUserDetailsComponent } from './main-user-details/main-user-details.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
userService = inject(UserService);


  tabs: any[] = [MainUserDetailsComponent, TransactionsComponent, UserRoleComponent]
  tabIndex = 0;
  route = inject(ActivatedRoute);
  userID: string | null = null;
  isloading :boolean = false;
  data:Object = {};

  tabIndexChanger(n: number) {
    this.tabIndex = n;
  }

  constructor() {
    this.route.paramMap.subscribe(
      (params) => {
        this.userID = params.get('id');
        if (this.userID) {
          this.getData();
        }
      }
    );
  }
  getData(){
    this.isloading = true;
    this.userService.getUserData(this.userID).subscribe(res => {
      this.data= res;
      console.log(res);
      this.isloading= false;
    });
  }
}
