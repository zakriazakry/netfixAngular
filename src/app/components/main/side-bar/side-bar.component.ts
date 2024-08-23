import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject, NgModule, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgFor,NgIf,NgTemplateOutlet,RouterLink,RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  auth = inject(AuthService);
  showTemplate = false;
}
