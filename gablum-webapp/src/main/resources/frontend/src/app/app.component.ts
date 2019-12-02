import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from './services/profile-data.service';
import { AuthenticationService } from './services/authentication.service';
import { CommunicatorService } from './services/communicator.service';
import { LoggerService } from './services/logger.service';
import { NavLink } from './interfaces/navlink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public isLoggedIn = false;
  public navLinks: NavLink[];

  constructor(
    private profile: ProfileDataService,
    private auth: AuthenticationService,
    private comms: CommunicatorService,
    private logger: LoggerService
  ) {
    this.isLoggedIn = auth.getAuthenticated();
    this.comms.getMessages().subscribe( message => {
      if (message.dest === '@all') {
        const data = message.data;
        if ('authChanged' in data) {
          this.isLoggedIn = auth.getAuthenticated();
          if (!this.isLoggedIn) {
            this.navLinks = undefined;
          } else {
            profile.getNavLinks('@all', 'navlinks');
          }
          this.logger.log(auth.getProfileData());
        }

        if ('navlinks' in data) {
          this.navLinks = data.navlinks;
        }
      }
    });
  }

  sideNavToggle() {
  }

  ngOnInit() {
    this.profile.getUserProfileByEmail('@all', 'profile');
  }
}
