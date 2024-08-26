import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-adminSideBar',
  standalone:true,
  imports:[RouterLinkActive,RouterLink],
  templateUrl: './adminSideBar.component.html',
  styleUrls: ['./adminSideBar.component.scss']
})
export class AdminSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
