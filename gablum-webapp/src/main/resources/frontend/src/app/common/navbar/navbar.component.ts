import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProfileDataService } from 'src/app/services/profile-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;

  @Output() public menuToggled = new EventEmitter();

  constructor(
    private comms: CommunicatorService,
    private auth: AuthenticationService,
    private profile: ProfileDataService
  ) {
    this.isLoggedIn = auth.getAuthenticated();
    this.comms.getMessages().subscribe( message => {
      if (message.dest === '@all') {
        const data = message.data;
        if ('authChanged' in data) {
          this.isLoggedIn = auth.getAuthenticated();
        }
      }
    });
  }

  ngOnInit() {
  }

  menuClicked(event) {
    this.menuToggled.emit(event);
  }

}
