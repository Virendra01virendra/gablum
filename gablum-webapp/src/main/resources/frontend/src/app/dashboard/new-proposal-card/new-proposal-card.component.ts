import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Proposal } from 'src/app/interfaces/proposal';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { ProposalCardDialogComponent } from '../proposal-card-dialog/proposal-card-dialog.component';
import { SellersListDialogComponent } from '../sellers-list-dialog/sellers-list-dialog.component';
import { Router } from '@angular/router';
import { ExtendProposalDialogComponent } from '../extend-proposal-dialog/extend-proposal-dialog.component';
import { LoggerService } from 'src/app/services/logger.service';
import { AuctionStartDialogComponent } from 'src/app/auction/auction-start-dialog/auction-start-dialog.component';

@Component({
  selector: 'app-new-proposal-card',
  templateUrl: './new-proposal-card.component.html',
  styleUrls: ['./new-proposal-card.component.css']
})
export class NewProposalCardComponent implements OnInit {

  public static messageKey = 'new-proposal-card-component';

  // @ViewChild('timer', {read: TimerComponent, static: true})
  // public timer: TimerComponent;

  constructor(
    private proposalDataService: ProposalsDataService,
    private comms: CommunicatorService,
    private dialog: MatDialog,
    private auctionDataService: AuctionsDataService,
    private router: Router,
    private logger: LoggerService,
  ) {

  }

  alreadyRegistered = false;
  @Input() proposal: Proposal;

  ngOnInit() {
  }

  sellersListDialog(proposal: Proposal) {
    this.dialog.open(SellersListDialogComponent, { data: proposal });
  }

  shownInterest(proposal: Proposal) {
    // const proposalId = element.proposalId;
    this.logger.log('some data which we are publishing ');
    this.alreadyRegistered = true;
    this.proposalDataService.postInterestedSeller(NewProposalCardComponent.messageKey, proposal, 'interestedSellers');
  }

  openDialog(proposal: Proposal) {
    this.dialog.open(ProposalCardDialogComponent, {
      // width: '60%',
      // height: '60%',
      data: proposal
    });
  }
  extendDialog(proposal: Proposal) {
    this.dialog.open(ExtendProposalDialogComponent, {data: proposal});
  }
  startAuction(proposal1: Proposal) {
    // const auction = {
    //   auctionName: proposal1.productName,
    //   proposal: proposal1,
    //   isAuctionActive: true,
    //   interestedUsersEmail: proposal1.interestedUsersEmail
    // };
    // const auctionList = [];
    // auctionList.push(auction);

    // const data = JSON.parse(JSON.stringify(auctionList));

    // this.auctionDataService.saveAuction('DashboardComponent', data, 'save-auction');
    // // this.auctionDataService.getAllAuctions('DashboardComponent', 'auctions');
    // this.router.navigate(['dashboard']);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = proposal1;
    dialogConfig.width = '40%';
    this.dialog.open(AuctionStartDialogComponent, dialogConfig);

  }

  delete(proposal: Proposal) {
    console.log('delete function is getting called');
    this.proposalDataService.deleteProposal(proposal.proposalId, '@all', 'proposals');
    // this.proposalDataService.getAllProposals('DashboardComponent', 'proposals');
  }
}
