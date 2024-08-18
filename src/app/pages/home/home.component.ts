import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/main/side-bar/side-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
