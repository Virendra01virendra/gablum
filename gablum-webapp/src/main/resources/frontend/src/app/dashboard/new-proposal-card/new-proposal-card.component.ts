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
import { ConfirmDialogModel, DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
// import * as moment from 'moment';

@Component({
  selector: 'app-new-proposal-card',
  templateUrl: './new-proposal-card.component.html',
  styleUrls: ['./new-proposal-card.component.css']
})
export class NewProposalCardComponent implements OnInit {
  public static messageKey = 'new-proposal-card-component';

  constructor(
    private proposalDataService: ProposalsDataService,
    private comms: CommunicatorService,
    private dialog: MatDialog,
    private auctionDataService: AuctionsDataService,
    private router: Router,
    private logger: LoggerService
  ) { }

  alreadyRegistered = false;
  @Input() proposal: Proposal;

  ngOnInit() {
  }

  sellersListDialog(proposal: Proposal) {
    this.dialog.open(SellersListDialogComponent, { data: proposal });
  }

  shownInterest(proposal: Proposal) {
    this.logger.log('some data which we are publishing ');
    this.alreadyRegistered = true;
    this.proposalDataService.postInterestedSeller(NewProposalCardComponent.messageKey, proposal, 'interestedSellers');
  }

  openDialog(proposal: Proposal) {
    this.dialog.open(ProposalCardDialogComponent, {
    data: proposal
    });
  }

  extendDialog(proposal: Proposal) {
    this.dialog.open(ExtendProposalDialogComponent, {data: proposal});
  }

  confirmDialog(): void {
    const message = `Are you sure you want to delete this proposal?`;

    const dialogData = new ConfirmDialogModel('Confirm Action', message);

    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      maxWidth: '400px',
      data: dialogData
    });
    // dialogRef.afterClosed().subscribe(dialogResult => {
    //   this.result = dialogResult;
    // });
  }
  startAuction(proposal1: Proposal) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = proposal1;
    dialogConfig.width = '40%';
    this.dialog.open(AuctionStartDialogComponent, dialogConfig);
  }
  delete(proposal: Proposal) {
    console.log('delete function is getting called');
    this.snackBar.open(
      'Your proposal has been removed.',
      '',
      {
        duration: 2000
      }
    );
    this.proposalDataService.deleteProposal(proposal.proposalId, '@all', 'proposals');
    // this.proposalDataService.getAllProposals('DashboardComponent', 'proposals');
  }
}
