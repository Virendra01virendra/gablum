import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proposal } from 'src/app/interfaces/proposal';
import { Auction } from 'src/app/interfaces/auction';

@Component({
  selector: 'app-proposal-card-dialog',
  templateUrl: './proposal-card-dialog.component.html',
  styleUrls: ['./proposal-card-dialog.component.css']
})
export class ProposalCardDialogComponent implements OnInit {
  auctions: Auction[];
  data1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  startAuction(proposal1: Proposal) {
    const auction = {
      auctionName: proposal1.productName,
      proposal: proposal1,
      isAuctionActive: true,
      interestedUsersEmail: proposal1.interestedUsersEmail,
    };
    const auctionList = [];
    auctionList.push(auction);

    this.data1 = JSON.parse(JSON.stringify(auctionList));

  //   this.http.post<any>(this.url, this.data, this.httpOptions).subscribe((response) => {
  //   console.log('response ::', response);
  // });

    this.auctionDataService.saveAuction(DashboardComponent.messageKey, this.data, 'save-auction');

  }

}
