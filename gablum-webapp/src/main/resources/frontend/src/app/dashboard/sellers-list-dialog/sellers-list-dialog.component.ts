import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Profile } from 'src/app/interfaces/profile';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sellers-list-dialog',
  templateUrl: './sellers-list-dialog.component.html',
  styleUrls: ['./sellers-list-dialog.component.css']
})
export class SellersListDialogComponent implements OnInit {

  public static messageKey = 'sellers-list-dialog-component';
  disabled = false;
  buttonClicked =  false;
  public isLoggedIn = false;
  public isBuyer = false;
  public isSeller = false;
  public profile: Profile;
  alreadyRegistered: boolean;
  public userEmail = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private proposalService: ProposalsDataService, comms: CommunicatorService,
               private auth: AuthenticationService) {
    comms.getMessages().subscribe(msg => {
      if (msg.dest === SellersListDialogComponent.messageKey || msg.dest === '@all') {
        const Data = msg.data;

        if ('authChanged' in Data) {
          this.isLoggedIn = auth.getAuthenticated();
          this.profile = auth.getProfileData();
          this.isBuyer = auth.isBuyer();
          this.isSeller = auth.isSeller();
          this.userEmail = this.profile.email;
        }

        if ('invite-seller' in Data) {
          this.buttonClicked = true;
        }
    }
  });
   }

  ngOnInit() {
  }

  onInvite(data) {
    this.disabled = true;
    this.proposalService.postInvitedSeller(SellersListDialogComponent.messageKey, this.data, 'invite-seller');
  }
}
