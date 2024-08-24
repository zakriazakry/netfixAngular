import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, inject, NgModule, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { TestDirective } from '../../../directive/test.directive';
import { MenuShowerDirective } from '../../../directive/menuShower.directive';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, RouterLink, RouterLinkActive, TestDirective, MenuShowerDirective],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  auth = inject(AuthService);
  showTemplate = false;
  toggleMenu() {
    this.showTemplate = !this.showTemplate;
  }
}
