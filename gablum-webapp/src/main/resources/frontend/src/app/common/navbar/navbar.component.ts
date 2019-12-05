import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { Profile } from 'src/app/interfaces/profile';
import { LoggerService } from 'src/app/services/logger.service';
import { LoginToken } from 'src/app/interfaces/login-token';
import { Router } from '@angular/router';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;
  public userProfile: Profile;

  @Output() public menuToggled = new EventEmitter();

  constructor(
    private comms: CommunicatorService,
    private auth: AuthenticationService,
    private profile: ProfileDataService,
    private logger: LoggerService,
    private router: Router,
    private login: LoginDataService
  ) {
    this.isLoggedIn = auth.getAuthenticated();
    this.comms.getMessages().subscribe( message => {
      if (message.dest === '@all') {
        const data = message.data;
        if ('authChanged' in data) {
          this.isLoggedIn = auth.getAuthenticated();
          // this.logger.log(auth.getProfileData());
          this.userProfile = auth.getProfileData();
        }

        if ('logoutResult' in data) {
          const logoutResult: LoginToken = data.logoutResult.accessToken;
          if (logoutResult === undefined || logoutResult === null) {

          } else {
            auth.setAuthenticated(false);
            auth.clearProfile();
            this.router.navigate(['/']);
            logger.log(logoutResult);
          }
        }
      }
    });
  }

  ngOnInit() {
  }

  menuClicked(event) {
    this.menuToggled.emit(event);
  }

  logout() {
    this.login.logout();
  }

}
