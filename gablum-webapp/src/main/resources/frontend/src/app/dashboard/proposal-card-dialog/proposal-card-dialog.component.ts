import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Proposal } from 'src/app/interfaces/proposal';
import { Auction } from 'src/app/interfaces/auction';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { AuctionStartDialogComponent } from 'src/app/auction/auction-start-dialog/auction-start-dialog.component';
import { Profile } from 'src/app/interfaces/profile';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { SellersListDialogComponent } from '../sellers-list-dialog/sellers-list-dialog.component';
import { ExtendProposalDialogComponent } from '../extend-proposal-dialog/extend-proposal-dialog.component';

@Component({
  selector: 'app-proposal-card-dialog',
  templateUrl: './proposal-card-dialog.component.html',
  styleUrls: ['./proposal-card-dialog.component.css']
})
export class ProposalCardDialogComponent implements OnInit {

  public static messageKey = 'ProposalCardDialog';

  public userProfile: Profile;
  proposals: Proposal[];
  allProposals: Proposal[];
  auctions: Auction[];
  pastAuctions: Proposal[];
  public businessSubdomain: string;
  isBuyer;
  isSeller;
  userRole;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auctionDataService: AuctionsDataService,
    private matDialog: MatDialog, private comms: CommunicatorService,
    private proposalDataService: ProposalsDataService
  ) {
    comms.getMessages().subscribe(msg => {
      if (msg.dest === ProposalCardDialogComponent.messageKey || msg.dest === '@all') {
        const Data = msg.data;


        if ('userProfile' in Data) {
          // getting user profile for subDomain
          this.userProfile = data.userProfile;
          this.businessSubdomain = this.userProfile.businessSubDomain;
          this.proposalDataService.getProposalsBySubDomain(
            this.businessSubdomain,
            ProposalCardDialogComponent.messageKey,
            'sellerProposals'
          );
          this.userRole = this.userProfile.role;
          console.log(this.userProfile.role[0]);
          console.log(this.userProfile.role[1]);
          if (this.userProfile.role.length === 1) {
            if (this.userProfile.role[0].role === 'seller') {
              this.isSeller = true;
              this.isBuyer = false;
            } else {
              this.isSeller = false;
              this.isBuyer = true;
            }
          } else {
            this.isBuyer = true;
            this.isSeller = true;
          }
        }
      }
    });
  }
  data1;

  ngOnInit() {
  }

  startAuction(proposal1: Proposal) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = proposal1;
    dialogConfig.width = '40%';
    this.matDialog.open(AuctionStartDialogComponent, dialogConfig);
  }

  sellersListDialog() {
    this.matDialog.open(SellersListDialogComponent, { data: this.data });
  }

  extendDialog() {
    this.matDialog.open(ExtendProposalDialogComponent, { data: this.data });
  }

}
