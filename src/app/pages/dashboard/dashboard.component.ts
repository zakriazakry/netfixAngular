import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<div class="dashborad">
  <app-adminSideBar></app-adminSideBar>
  <div class="view">
    <router-outlet></router-outlet>
  </div>
</div>
`,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
