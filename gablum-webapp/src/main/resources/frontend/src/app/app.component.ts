import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from './services/profile-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public isLoggedIn = false;

  constructor(
    private profile: ProfileDataService
  ) { }

  sideNavToggle() {
  }

  ngOnInit() {
    this.profile.getUserProfileByEmail('@all', 'profile');
  }
}
