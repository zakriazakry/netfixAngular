import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from "../../../components/main/nav-bar/nav-bar.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FontAwesomeModule , NavBarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  faChevronRight= faChevronRight;
}
