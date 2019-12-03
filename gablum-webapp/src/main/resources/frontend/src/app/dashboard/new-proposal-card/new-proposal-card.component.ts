import { Component, OnInit, Input } from '@angular/core';
import { Proposal } from 'src/app/interfaces/proposal';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { ProposalsListComponent } from 'src/app/dashboard/proposals-list/proposals-list.component';
import { ProposalCardDialogComponent } from '../proposal-card-dialog/proposal-card-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-new-proposal-card',
  templateUrl: './new-proposal-card.component.html',
  styleUrls: ['./new-proposal-card.component.css']
})
export class NewProposalCardComponent implements OnInit {

  constructor(
    private proposalDataService: ProposalsDataService,
    private comms: CommunicatorService,
    private dialog: MatDialog
    ) {

    }

  public static messageKey = 'new-proposal-card-component';

  @Input() proposal: Proposal;

  ngOnInit() {
  }

  sellersListDialog(proposal: Proposal) {
    this.dialog.open(ProposalCardDialogComponent, { data: proposal});
  }
  // startAuction(proposal1: Proposal) {
  //   const auction = {
  //     auctionName: proposal1.productName,
  //     proposal: proposal1,
  //     isAuctionActive: true
  //   };
  //   const auctionList = [];
  //   auctionList.push(auction);

  //   this.data = JSON.parse(JSON.stringify(auctionList));

  // //   this.http.post<any>(this.url, this.data, this.httpOptions).subscribe((response) => {
  // //   console.log('response ::', response);
  // // });

  //   this.auctionDataService.saveAuction(DashboardComponent.messageKey, this.data, 'save-auction');

  // }
}
