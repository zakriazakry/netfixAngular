import { Component } from '@angular/core';
import { AdsComponent } from '../../components/main/ads/ads.component';
import { HeroComponent } from '../../components/main/hero/hero.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [HeroComponent, AdsComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
