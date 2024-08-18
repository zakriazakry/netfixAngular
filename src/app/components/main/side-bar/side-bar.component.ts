import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, NgModule, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgFor,NgIf,NgTemplateOutlet],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  showTemplate = false;
}
