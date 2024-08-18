import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/main/hero/hero.component';
import { AdsComponent } from '../../../components/main/ads/ads.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [HeroComponent, AdsComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
