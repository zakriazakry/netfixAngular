import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/main/nav-bar/nav-bar.component";
import { DividerComponent } from './components/main/divider/divider.component';
import { AdsComponent } from './components/main/ads/ads.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { SideBarComponent } from "./components/main/side-bar/side-bar.component";
import { ToastComponent } from "./components/dialog/toast/toast.component";
import { ToasterService } from './services/toaster.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeroComponent, DividerComponent, AdsComponent, SideBarComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private toasterService: ToasterService) {}
  showToast() {
    this.toasterService.showToast('تم الضغط على الزر!','sssss');
  }

  openDialog() {
    const dialog = document.getElementById('custom-dialog');
    if (dialog) {
      dialog.style.display = 'flex';
    }
  }

}
