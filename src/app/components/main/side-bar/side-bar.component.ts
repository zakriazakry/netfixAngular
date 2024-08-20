import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, NgModule, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgFor,NgIf,NgTemplateOutlet,RouterLink,RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  showTemplate = false;
}
