import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/main/nav-bar/nav-bar.component";
import { HeroComponent } from "./pages/home/hero/hero.component";
import { DividerComponent } from './components/main/divider/divider.component';
import { AdsComponent } from './components/main/ads/ads.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeroComponent, DividerComponent, AdsComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
}
