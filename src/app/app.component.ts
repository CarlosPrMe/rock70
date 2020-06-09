import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'rock70';

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        window.scroll(0, 0);
      }
    })
  }
}
