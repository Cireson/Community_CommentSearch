import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comment Search';
  currentUrl: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((d: NavigationEnd) => this.currentUrl = d.url);
   }
}
