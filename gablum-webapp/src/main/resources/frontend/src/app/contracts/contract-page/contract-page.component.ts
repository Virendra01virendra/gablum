import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/interfaces/profile';
import { Auction } from 'src/app/interfaces/auction';
import { ContractDetail } from 'src/app/interfaces/contract-detail';

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
  contracts: ContractDetail[];
  public userProfile: Profile;

  constructor(
    private comms: CommunicatorService,
    private router: Router,
    private logger: LoggerService,
    private auth: AuthenticationService,
    public http: HttpClient,
    private user: ProfileDataService
  ) {
    this.isLoggedIn = auth.getAuthenticated();
    if (this.isLoggedIn) {
      this.logger.log(this, auth.getProfileData());
    }
    comms.getMessages().subscribe(msg => {
      if (msg.dest === ContractPageComponent.messageKey || msg.dest === '@all') {
        const data = msg.data;

        if ('contracts' in data) {
          this.contracts = data.contracts;
        }

        if ('userProfile' in data) {             // getting user profile for subDomain
          this.userProfile = data.userProfile;
          this.userRole = this.userProfile.role;
          if (this.userProfile.role[0].role === 'buyer') {
            this.isBuyer = true;
            this.isSeller = false;
          } else { this.isSeller = true;
                   this.isBuyer = false;
          }
        } else {
          this.isBuyer = true;
          this.isSeller = true;
        }
      }
      console.log(this.isBuyer);
      console.log(this.isSeller);
    });
  }

  ngOnInit() {
  }
}

