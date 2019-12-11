import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit {

  public static messageKey = 'ContractPageComponent';

  public isLoggedIn = false;
  public isBuyer;
  public isSeller;
  public userRole = new Array();

  constructor(
    private user: ProfileDataService,
    private comms: CommunicatorService,
    private router: Router,
    private logger: LoggerService,
    private auth: AuthenticationService,
    public http: HttpClient
  ) {
    this.isLoggedIn = auth.getAuthenticated();
    if (this.isLoggedIn) {
      this.logger.log(this, auth.getProfileData());
  }

  ngOnInit() {
  }

}
