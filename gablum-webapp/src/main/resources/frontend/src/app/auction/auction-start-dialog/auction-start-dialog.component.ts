import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material/dialog';
import { Proposal } from 'src/app/interfaces/proposal';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { Router } from '@angular/router';
import { CommunicatorService } from 'src/app/services/communicator.service';
import {Profile} from '../../interfaces/profile';
import { environment } from 'src/environments/environment';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';


@Component({
  selector: 'app-auction-start-dialog',
  templateUrl: './auction-start-dialog.component.html',
  styleUrls: ['./auction-start-dialog.component.css']
})
export class AuctionStartDialogComponent {

  public static messageKey = 'AuctionStartDialogComponent';
  disabled = false;
  public userProfileList: Profile[];
  public userProfile: Profile;
  public profileUrl = environment.profileUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AuctionStartDialogComponent>,
    private auctionDataService: AuctionsDataService,
    private router: Router,
    private comms: CommunicatorService,
    private profileDataService: ProfileDataService,
    private proposalDataService: ProposalsDataService
              ) {
                comms.getMessages().subscribe(msg => {
                  if (msg.dest === AuctionStartDialogComponent.messageKey || msg.dest === '@all') {
                    const data1 = msg.data;
                    if ('otherUser' in data) {
                      this.userProfile = data.otherUser;
                      console.log(this.userProfile.name);
                      this.userProfileList.push(this.userProfile);
                    }
                    if ('save-auction' in data1) {
                      this.auctionDataService.getAllAuctions('DashboardComponent', 'auctionsBuyer');
                    }

                    if ('auctionStarted' in data1) {
                      const data2 = data1.auctionStarted;
                    }
                  }
                });
              }

  close() {
    this.dialogRef.close();
  }

  startAuction(proposal1: Proposal) {
    const auction = {
      auctionName: proposal1.productName,
      proposal: proposal1,
      isAuctionActive: true,
      interestedUsersEmail: proposal1.interestedUsersEmail
    };
    const auctionList = [];
    auctionList.push(auction);

    const data = JSON.parse(JSON.stringify(auctionList));

    this.auctionDataService.saveAuction(AuctionStartDialogComponent.messageKey, data, 'save-auction');
    this.proposalDataService.changeAuctionFlag(proposal1.proposalId, AuctionStartDialogComponent.messageKey, 'auctionStarted');
    this.router.navigate(['dashboard']);
    this.close();
  }
ngOnIt() {
  let i = 0;
  for ( ; i < this.data.interestedUsersEmail.length; i++) {
    this.profileUrl = environment.profileUrl;
    this.profileUrl = this.profileUrl + '/' + this.data.interestedUsersEmail[i];
    this.profileDataService.getUserProfileByEmailWithUrl(
      this.profileUrl, AuctionStartDialogComponent.messageKey, 'otherUser');
  }
}
  onClick() {
    this.disabled = true;
  }
}
