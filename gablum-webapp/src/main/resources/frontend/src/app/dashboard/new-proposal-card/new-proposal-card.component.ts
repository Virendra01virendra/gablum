import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Proposal } from 'src/app/interfaces/proposal';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { MatDialog } from '@angular/material';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';

import { ProposalCardDialogComponent } from '../proposal-card-dialog/proposal-card-dialog.component';
import { SellersListDialogComponent } from '../sellers-list-dialog/sellers-list-dialog.component';
import { GuestProposalListComponent } from '../guest-proposal-list/guest-proposal-list.component';
import { Router } from '@angular/router';
import { TimerComponent } from 'src/app/scheduler/timer/timer.component';
import { LoggerService } from 'src/app/services/logger.service';

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
    private loggger: LoggerService
    ) {

    }


  @Input() proposal: Proposal;

  ngOnInit() {
  }

  sellersListDialog(proposal: Proposal) {
    this.dialog.open(SellersListDialogComponent, { data: proposal});
  }

  openDialog(proposal: Proposal) {
    this.dialog.open(ProposalCardDialogComponent, {
      width: '60%',
      height: '60%',
      data: proposal
    });
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

    this.auctionDataService.saveAuction('DashboardComponent', data, 'save-auction');

  }

  delete(proposal: Proposal) {
    console.log('delete function is getting called');
    this.proposalDataService.deleteProposal(proposal.proposalId, '@all', 'proposals');
    // this.proposalDataService.getAllProposals('DashboardComponent', 'proposals');
  }
}
