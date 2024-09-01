import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-serverError',
  standalone: true,
  imports : [RouterLink],
  templateUrl: './serverError.component.html',
  styleUrls: ['./serverError.component.scss']
})
export class ServerErrorComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
