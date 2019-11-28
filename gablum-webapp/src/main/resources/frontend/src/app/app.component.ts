import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public isLoggedIn = false;

  sideNavToggle() {
    console.log('sidenav toggle');
  }

  ngOnInit() {
  }
}
