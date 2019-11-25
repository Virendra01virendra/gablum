import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public isLoggedIn = false;

  sideNavToggle() {
    console.log('sidenav toggle');
  }
}
