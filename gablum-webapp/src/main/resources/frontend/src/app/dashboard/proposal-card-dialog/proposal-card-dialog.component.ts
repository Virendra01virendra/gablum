import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Proposal } from 'src/app/interfaces/proposal';
import { Auction } from 'src/app/interfaces/auction';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { AuctionStartDialogComponent } from 'src/app/auction/auction-start-dialog/auction-start-dialog.component';

@Component({
  selector: 'app-proposal-card-dialog',
  templateUrl: './proposal-card-dialog.component.html',
  styleUrls: ['./proposal-card-dialog.component.css']
})
export class ProposalCardDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auctionDataService: AuctionsDataService,
    private matDialog: MatDialog
    ) { }
  public static messageKey = 'ProposalCardDialog';
  auctions: Auction[];
  data1;

  ngOnInit() {
  }

  startAuction(proposal1: Proposal) {
  //   const auction = {
  //     auctionName: proposal1.productName,
  //     proposal: proposal1,
  //     isAuctionActive: true,
  //     interestedUsersEmail: proposal1.interestedUsersEmail,
  //   };
  //   const auctionList = [];
  //   auctionList.push(auction);

  //   this.data1 = JSON.parse(JSON.stringify(auctionList));

  // //   this.http.post<any>(this.url, this.data, this.httpOptions).subscribe((response) => {
  // //   console.log('response ::', response);
  // // });

  //   this.auctionDataService.saveAuction(ProposalCardDialogComponent.messageKey, this.data, 'save-auction');

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = proposal1;
    dialogConfig.width = '40%';
    this.matDialog.open(AuctionStartDialogComponent, dialogConfig);
  }

}
